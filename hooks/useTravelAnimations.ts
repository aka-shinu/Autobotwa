import { useState, useEffect } from 'react'
import { Variants } from 'framer-motion'

export interface UseTravelAnimationsReturn {
  isAnimating: boolean
  carAnimationState: 'idle' | 'moving' | 'arriving'
  roadAnimationState: 'idle' | 'moving'
  triggerCarAnimation: () => void
  triggerRoadAnimation: () => void
  resetAnimations: () => void
}

/**
 * Custom hook for managing travel-themed animation states
 */
export function useTravelAnimations(
  isTransitioning: boolean = false
): UseTravelAnimationsReturn {
  const [isAnimating, setIsAnimating] = useState(false)
  const [carAnimationState, setCarAnimationState] = useState<
    'idle' | 'moving' | 'arriving'
  >('idle')
  const [roadAnimationState, setRoadAnimationState] = useState<
    'idle' | 'moving'
  >('idle')

  useEffect(() => {
    if (isTransitioning) {
      setIsAnimating(true)
      setCarAnimationState('moving')
      setRoadAnimationState('moving')

      const timer = setTimeout(() => {
        setCarAnimationState('arriving')
      }, 400)

      const resetTimer = setTimeout(() => {
        setIsAnimating(false)
        setCarAnimationState('idle')
        setRoadAnimationState('idle')
      }, 1000)

      return () => {
        clearTimeout(timer)
        clearTimeout(resetTimer)
      }
    }
  }, [isTransitioning])

  const triggerCarAnimation = () => {
    setIsAnimating(true)
    setCarAnimationState('moving')
    setTimeout(() => setCarAnimationState('arriving'), 400)
    setTimeout(() => {
      setIsAnimating(false)
      setCarAnimationState('idle')
    }, 1000)
  }

  const triggerRoadAnimation = () => {
    setRoadAnimationState('moving')
    setTimeout(() => setRoadAnimationState('idle'), 2000)
  }

  const resetAnimations = () => {
    setIsAnimating(false)
    setCarAnimationState('idle')
    setRoadAnimationState('idle')
  }

  return {
    isAnimating,
    carAnimationState,
    roadAnimationState,
    triggerCarAnimation,
    triggerRoadAnimation,
    resetAnimations,
  }
}

/**
 * Animation variants for travel-themed effects
 */
export const travelAnimationVariants: Variants = {
  carMoving: {
    x: ['-100%', '0%'],
    opacity: [0, 1],
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  carArriving: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  roadMoving: {
    x: ['0%', '-100%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}
























