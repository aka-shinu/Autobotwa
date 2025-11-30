'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedTitleProps {
  title: string
  subtitle?: string
}

export default function AnimatedTitle({ title, subtitle }: AnimatedTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const words = title.split(' ')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-100 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          {/* Main Title */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-5 mb-8 md:mb-10">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block relative"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #111827 0%, #1f2937 30%, #374151 60%, #dc2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '0.03em',
                  lineHeight: '1.15',
                  textShadow: '0 0 80px rgba(220, 38, 38, 0.1)',
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed px-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                letterSpacing: '0.08em',
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  )
}

