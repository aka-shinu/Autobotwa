'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface MemoryStoryPartProps {
  text: string
  index: number
  isActive: boolean
}

export default function MemoryStoryPart({
  text,
  index,
  isActive,
}: MemoryStoryPartProps) {
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isActive && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isActive, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isActive
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
            }
          : {
              opacity: 0,
              y: 50,
              scale: 0.95,
            }
      }
      transition={{
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 border border-white/30 shadow-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold leading-tight drop-shadow-2xl text-center"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  )
}

