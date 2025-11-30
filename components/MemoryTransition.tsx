'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import CarTransitionAnimation from './CarTransitionAnimation'

interface MemoryTransitionProps {
  memoryIndex: number
  totalMemories: number
}

export default function MemoryTransition({
  memoryIndex,
  totalMemories,
}: MemoryTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevIndexRef = useRef(memoryIndex)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  })

  useEffect(() => {
    if (memoryIndex !== prevIndexRef.current && memoryIndex > 0) {
      setIsTransitioning(true)
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 1200)
      prevIndexRef.current = memoryIndex
      return () => clearTimeout(timer)
    }
  }, [memoryIndex])

  // Determine direction based on index change
  const direction = memoryIndex > prevIndexRef.current ? 'right' : 'left'

  return (
    <div ref={ref} className="relative h-screen w-full">
      <CarTransitionAnimation
        isTransitioning={isTransitioning && inView}
        direction={direction}
      />
    </div>
  )
}

