import { Variants } from 'framer-motion'

/**
 * Animation variants for travel-themed car movement
 */
export const carMovementVariants: Variants = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
}

/**
 * Animation variants for road movement effect
 */
export const roadMovementVariants: Variants = {
  initial: {
    x: '0%',
  },
  animate: {
    x: '-100%',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

/**
 * Animation variants for slide fade in
 */
export const slideFadeVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
}

/**
 * Animation variants for car icon rotation (for navigation)
 */
export const carIconVariants: Variants = {
  idle: {
    rotate: 0,
    scale: 1,
  },
  hover: {
    rotate: [0, -10, 10, 0],
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  click: {
    scale: 0.9,
    transition: {
      duration: 0.1,
    },
  },
}

/**
 * Animation configuration for memory slide transitions
 */
export const memorySlideTransition = {
  duration: 0.8,
  ease: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
}

/**
 * Stagger animation for multiple elements
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
























