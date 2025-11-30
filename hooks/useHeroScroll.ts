'use client'

import { useState, useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

interface UseHeroScrollOptions {
  heroHeight?: number
  minDifference?: number
}

export function useHeroScroll(options: UseHeroScrollOptions = {}) {
  const { heroHeight = 400, minDifference = 20 } = options
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const lastState = useRef(true)

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    const previous = lastScrollY.current
    const scrollDifference = Math.abs(latest - previous)

    // Only update if scroll difference is significant (prevents rapid toggling)
    if (scrollDifference < minDifference) return

    const headerHeight = 130 // Approximate header height (utilibar + nav)
    
    // Hysteresis: different thresholds for showing vs hiding to prevent flickering
    const showFormThreshold = headerHeight + heroHeight - 30 // Show form slightly before hero ends
    const hideFormThreshold = headerHeight + heroHeight - 80 // Hide form earlier (more buffer)
    
    const shouldShowForm = latest > showFormThreshold
    const shouldHideForm = latest < hideFormThreshold

    // Only update state if it actually changed and threshold is met
    if (shouldShowForm && lastState.current !== false) {
      setIsHeroVisible(false)
      lastState.current = false
    } else if (shouldHideForm && lastState.current !== true) {
      setIsHeroVisible(true)
      lastState.current = true
    }

    lastScrollY.current = latest
  })

  return !isHeroVisible // Return true when form should be visible (hero not visible)
}
