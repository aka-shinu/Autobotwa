'use client'

import { useState, useCallback, useRef, useEffect } from 'react'

interface UseMemoryScrollHijackOptions {
  enabled?: boolean
  scrollThreshold?: number
  transitionDuration?: number
}

export interface ScrollHijackState {
  isTransitioning: boolean
  currentStep: number
  totalSteps: number
}

export function useMemoryScrollHijack(
  totalSteps: number,
  options: UseMemoryScrollHijackOptions = {}
) {
  const {
    enabled = true,
    scrollThreshold = 100,
    transitionDuration = 1000,
  } = options

  const [currentStep, setCurrentStep] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const scrollAccumulator = useRef(0)
  const lastDirection = useRef<'up' | 'down' | null>(null)
  const lockTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetAccumulator = useCallback(() => {
    scrollAccumulator.current = 0
    lastDirection.current = null
  }, [])

  const handleStepChange = useCallback(
    (direction: 'up' | 'down') => {
      if (isTransitioning) return

      if (direction === 'down' && currentStep < totalSteps - 1) {
        setIsTransitioning(true)
        setCurrentStep((prev) => prev + 1)
        resetAccumulator()
      } else if (direction === 'up' && currentStep > 0) {
        setIsTransitioning(true)
        setCurrentStep((prev) => prev - 1)
        resetAccumulator()
      }

      if (lockTimeoutRef.current) {
        clearTimeout(lockTimeoutRef.current)
      }
      lockTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false)
      }, transitionDuration)
    },
    [currentStep, totalSteps, isTransitioning, transitionDuration, resetAccumulator]
  )

  const handleScroll = useCallback(
    (e: WheelEvent) => {
      if (!enabled || isTransitioning) return

      const scrollDelta = e.deltaY
      const isScrollingDown = scrollDelta > 0
      const direction = isScrollingDown ? 'down' : 'up'
      const absDelta = Math.abs(scrollDelta)

      if (lastDirection.current && lastDirection.current !== direction) {
        resetAccumulator()
      }

      lastDirection.current = direction
      scrollAccumulator.current += absDelta

      if (scrollAccumulator.current >= scrollThreshold) {
        e.preventDefault()
        e.stopPropagation()
        handleStepChange(direction)
      }
    },
    [enabled, isTransitioning, scrollThreshold, handleStepChange, resetAccumulator]
  )

  const handleTouch = useCallback(
    (touchDelta: number) => {
      if (!enabled || isTransitioning) return

      const direction = touchDelta > 0 ? 'down' : 'up'
      const absDelta = Math.abs(touchDelta)

      if (absDelta > 50) {
        if (lastDirection.current && lastDirection.current !== direction) {
          resetAccumulator()
        }

        lastDirection.current = direction
        scrollAccumulator.current += absDelta

        if (scrollAccumulator.current >= scrollThreshold) {
          handleStepChange(direction)
          resetAccumulator()
        }
      }
    },
    [enabled, isTransitioning, scrollThreshold, handleStepChange, resetAccumulator]
  )

  useEffect(() => {
    return () => {
      if (lockTimeoutRef.current) {
        clearTimeout(lockTimeoutRef.current)
      }
    }
  }, [])

  return {
    currentStep,
    isTransitioning,
    handleScroll,
    handleTouch,
    setCurrentStep,
  }
}
























