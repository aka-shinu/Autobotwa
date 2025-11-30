'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Car } from 'lucide-react'
import { useEffect, useState } from 'react'

interface CarTransitionAnimationProps {
  isTransitioning: boolean
  direction?: 'left' | 'right'
}

export default function CarTransitionAnimation({
  isTransitioning,
  direction = 'right',
}: CarTransitionAnimationProps) {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    if (isTransitioning) {
      setShouldShow(true)
      // Hide after animation completes
      const timer = setTimeout(() => {
        setShouldShow(false)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-30 pointer-events-none"
        >
          {/* Car moving across screen */}
          <motion.div
            initial={{
              x: direction === 'right' ? '-10%' : '110%',
              y: '50%',
            }}
            animate={{
              x: direction === 'right' ? '110%' : '-10%',
              y: '50%',
            }}
            transition={{
              duration: 1,
              ease: [0.43, 0.13, 0.23, 0.96],
            }}
            className="absolute top-1/2 -translate-y-1/2"
          >
            <div className="relative">
              {/* Car shadow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 blur-md rounded-full"></div>
              {/* Car icon */}
              <div className="relative bg-red-600/90 backdrop-blur-sm p-3 rounded-lg shadow-2xl border-2 border-white/20">
                <Car className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              {/* Motion lines behind car */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-white/40 blur-sm"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2,
                  ease: 'linear',
                }}
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-white/30 blur-sm"
              ></motion.div>
            </div>
          </motion.div>

          {/* Road effect at bottom */}
          <motion.div
            initial={{ x: '0%' }}
            animate={{ x: direction === 'right' ? '-100%' : '100%' }}
            transition={{
              duration: 1,
              ease: 'linear',
              repeat: Infinity,
            }}
            className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-red-600/20 to-transparent"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
























