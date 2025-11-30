'use client'

import { useState, useEffect, useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

interface UseMemorySectionScrollOptions {
  offset?: number
  minDifference?: number
}

export function useMemorySectionScroll(
  options: UseMemorySectionScrollOptions = {}
) {
  const { offset = 50, minDifference = 50 } = options
  const [isInMemorySection, setIsInMemorySection] = useState(false)
  const { scrollY } = useScroll()
  const sectionTopRef = useRef<number | null>(null)
  const sectionBottomRef = useRef<number | null>(null)
  const lastStateRef = useRef(false)

  useEffect(() => {
    // Find the memories section and get its position
    const updateSectionPosition = () => {
      const section = document.querySelector(
        '[data-memories-section]'
      ) as HTMLElement
      if (section) {
        const rect = section.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        sectionTopRef.current = rect.top + scrollTop
        sectionBottomRef.current = rect.bottom + scrollTop
        return true
      }
      return false
    }

    // Try to find section immediately
    if (!updateSectionPosition()) {
      // Try again after a delay if not found
      const timeout = setTimeout(() => {
        updateSectionPosition()
      }, 100)
      
      // Also try on window load
      window.addEventListener('load', updateSectionPosition)
      
      return () => {
        clearTimeout(timeout)
        window.removeEventListener('load', updateSectionPosition)
      }
    }
    
    // Update position on resize
    window.addEventListener('resize', updateSectionPosition)
    window.addEventListener('scroll', updateSectionPosition)
    
    return () => {
      window.removeEventListener('resize', updateSectionPosition)
      window.removeEventListener('scroll', updateSectionPosition)
    }
  }, [])

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (sectionTopRef.current === null || sectionBottomRef.current === null) {
      // Try to find section again
      const section = document.querySelector(
        '[data-memories-section]'
      ) as HTMLElement
      if (section) {
        const rect = section.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        sectionTopRef.current = rect.top + scrollTop
        sectionBottomRef.current = rect.bottom + scrollTop
      }
      return
    }

    // Check if we're within the section bounds (between top and bottom)
    const sectionStart = sectionTopRef.current - offset
    const sectionEnd = sectionBottomRef.current
    const isInSection = latest >= sectionStart && latest < sectionEnd
    
    // Only update if state actually changed (prevents rapid toggling)
    if (isInSection !== lastStateRef.current) {
      setIsInMemorySection(isInSection)
      lastStateRef.current = isInSection
    }
  })

  return isInMemorySection
}

