'use client'

import { useState, useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

interface UseScrollHideOptions {
  threshold?: number
  scrollUpThreshold?: number
  minDifference?: number
}

export function useScrollHide(options: UseScrollHideOptions = {}) {
  const {
    threshold = 80,
    scrollUpThreshold = 30,
    minDifference = 10,
  } = options

  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    const previous = lastScrollY.current
    const scrollDifference = Math.abs(latest - previous)
    const scrollDirection = latest > previous ? 'down' : 'up'

    if (scrollDifference < minDifference) return

    if (latest < 5) {
      setHidden(false)
    } else if (scrollDirection === 'down' && latest > threshold) {
      setHidden(true)
    } else if (scrollDirection === 'up' && previous - latest > scrollUpThreshold) {
      setHidden(false)
    }

    lastScrollY.current = latest
  })

  return hidden
}
























