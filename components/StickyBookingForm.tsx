'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import type { BookingFormProps } from '@/types/booking'

export default function StickyBookingForm({ hidden }: BookingFormProps) {
  return (
    <motion.div
      layout
      animate={{
        height: hidden ? 0 : 72,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="overflow-hidden hidden md:block bg-gradient-to-b from-white to-gray-50/50 border-b border-red-200/60 shadow-lg backdrop-blur-sm"
      style={{ 
        willChange: 'height, opacity',
        transform: 'translateZ(0)',
      }}
    >
      <div className="container mx-auto px-3 md:px-4 py-2">
        <form className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-2.5">
          <div className="relative group">
            <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-red-600 z-10 group-hover:text-red-700 transition-colors" />
            <input
              type="text"
              placeholder="Pickup"
              className="w-full pl-9 pr-2.5 py-1.5 md:py-2 text-gray-900 placeholder-gray-400 bg-white/80 border border-gray-200 rounded-md focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 focus:ring-red-500/20 text-xs md:text-sm transition-all"
            />
          </div>
          <div className="relative group">
            <MapPin className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-red-600 z-10 group-hover:text-red-700 transition-colors" />
            <input
              type="text"
              placeholder="Drop"
              className="w-full pl-9 pr-2.5 py-1.5 md:py-2 text-gray-900 placeholder-gray-400 bg-white/80 border border-gray-200 rounded-md focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 focus:ring-red-500/20 text-xs md:text-sm transition-all"
            />
          </div>
          <div className="relative group">
            <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-red-600 z-10 group-hover:text-red-700 transition-colors" />
            <input
              type="date"
              className="w-full pl-9 pr-2.5 py-1.5 md:py-2 text-gray-900 bg-white/80 border border-gray-200 rounded-md focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 focus:ring-red-500/20 text-xs md:text-sm cursor-pointer transition-all"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-md transition-all flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 text-xs md:text-sm group"
          >
            <span>Search</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </form>
      </div>
    </motion.div>
  )
}
