'use client'

import { useEffect, useRef, RefObject, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseScrollHijackOptions {
  containerRef: RefObject<HTMLElement>
  onScrollDown: () => void
  onScrollUp: () => void
  scrollThreshold?: number
  enabled?: boolean
}

/**
 * Custom hook for scroll hijacking using react-intersection-observer
 * Provides smooth scroll-based navigation for the memories carousel
 */
export function useScrollHijack({
  containerRef,
  onScrollDown,
  onScrollUp,
  scrollThreshold = 80,
  enabled = true,
}: UseScrollHijackOptions) {
  const isLocked = useRef(false)
  const scrollAccumulator = useRef(0)
  const lastDirection = useRef<'up' | 'down' | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const debounceRef = useRef<NodeJS.Timeout | null>(null)

  // Use react-intersection-observer for reliable viewport detection
  const { ref: intersectionRef, inView } = useInView({
    threshold: 0.2, // At least 20% visible
    rootMargin: '0px', // No margin - just check if in viewport
    triggerOnce: false, // Keep observing
  })

  // Attach intersection observer ref to the container element
  useEffect(() => {
    if (containerRef.current && typeof intersectionRef === 'function') {
      intersectionRef(containerRef.current)
    }
  }, [containerRef, intersectionRef])

  const resetAccumulator = useCallback(() => {
    scrollAccumulator.current = 0
    lastDirection.current = null
  }, [])

  // Handle wheel events for scroll hijacking
  useEffect(() => {
    if (!enabled) return

    const container = containerRef.current
    if (!container) return

    // Check if section is in viewport manually as backup
    const isSectionInViewport = () => {
      if (!inView) return false
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      // Check if section is significantly visible
      return rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2
    }

    const handleWheel = (e: WheelEvent) => {
      // Only hijack if section is in viewport
      if (!isSectionInViewport()) {
        resetAccumulator()
        return
      }

      // If locked (transitioning), allow normal scroll
      if (isLocked.current) {
        return
      }

      const scrollDelta = e.deltaY
      const isScrollingDown = scrollDelta > 0
      const direction = isScrollingDown ? 'down' : 'up'
      const absDelta = Math.abs(scrollDelta)

      // Reset if direction changed
      if (lastDirection.current && lastDirection.current !== direction) {
        resetAccumulator()
      }

      lastDirection.current = direction
      scrollAccumulator.current += absDelta

      // Trigger slide change if threshold reached
      if (scrollAccumulator.current >= scrollThreshold) {
        // Prevent default scroll only when changing slides
        e.preventDefault()
        e.stopPropagation()

        isLocked.current = true

        // Trigger slide change
        if (isScrollingDown) {
          onScrollDown()
        } else {
          onScrollUp()
        }

        resetAccumulator()

        // Unlock after transition completes
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
          isLocked.current = false
        }, 1200) // Slightly longer than swiper transition (1000ms)
      }

      // Debounce reset - clear accumulator if no scroll for 250ms
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      debounceRef.current = setTimeout(() => {
        resetAccumulator()
      }, 250)
    }

    // Handle touch for mobile
    let touchStartY = 0
    let lastTouchY = 0
    let touchMoved = false

    const handleTouchStart = (e: TouchEvent) => {
      if (!isSectionInViewport()) return
      touchStartY = e.touches[0].clientY
      lastTouchY = touchStartY
      touchMoved = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isSectionInViewport() || isLocked.current) return

      const touchY = e.touches[0].clientY
      const touchDelta = lastTouchY - touchY
      const absDelta = Math.abs(touchDelta)

      if (absDelta > 10) {
        touchMoved = true
      }

      // Accumulate touch movement
      if (touchMoved) {
        const direction = touchDelta > 0 ? 'down' : 'up'

        // Reset if direction changed
        if (lastDirection.current && lastDirection.current !== direction) {
          resetAccumulator()
          touchStartY = touchY
        }

        lastDirection.current = direction
        scrollAccumulator.current += absDelta
        lastTouchY = touchY

        // Trigger slide change if threshold reached
        if (scrollAccumulator.current >= scrollThreshold) {
          e.preventDefault()
          e.stopPropagation()

          isLocked.current = true

          if (touchDelta > 0) {
            // Swiping up = scroll down = next
            onScrollDown()
          } else {
            // Swiping down = scroll up = prev
            onScrollUp()
          }

          resetAccumulator()
          touchStartY = touchY
          lastTouchY = touchY

          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
          }
          timeoutRef.current = setTimeout(() => {
            isLocked.current = false
          }, 1200)
        }
      }
    }

    // Add event listeners to window for better capture
    window.addEventListener('wheel', handleWheel, { passive: false, capture: true })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel, { capture: true })
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [
    containerRef,
    onScrollDown,
    onScrollUp,
    scrollThreshold,
    enabled,
    inView,
    resetAccumulator,
  ])
}
