'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, RefObject } from 'react'
import { Memory } from '@/types/memories'

interface MemoryBackgroundProps {
  memory: Memory
  sectionRef: RefObject<HTMLElement>
}

export default function MemoryBackground({
  memory,
  sectionRef,
}: MemoryBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax effect - image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.7])

  return (
    <div
      ref={containerRef}
      className="sticky top-0 w-full h-screen z-[1] overflow-hidden"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={memory.image}
          alt={memory.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.6) contrast(1.2) saturate(1.2)',
          }}
        />
        {/* Darker Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85"></div>
        {/* Additional darkening for text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>
    </div>
  )
}

