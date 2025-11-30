'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface MemoryNavigationProps {
  onNext: () => void
  onPrev: () => void
  canGoNext: boolean
  canGoPrev: boolean
}

export default function MemoryNavigation({
  onNext,
  onPrev,
  canGoNext,
  canGoPrev,
}: MemoryNavigationProps) {
  return (
    <>
      {/* Previous Button */}
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        className="swiper-button-prev-memories absolute left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Previous memory"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
        </motion.div>
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="swiper-button-next-memories absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 md:p-4 shadow-xl hover:bg-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        aria-label="Next memory"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
        </motion.div>
      </button>
    </>
  )
}

