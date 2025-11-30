'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import TestimonialCard from './TestimonialCard'
import { TESTIMONIALS } from '@/constants/testimonials'
import { testimonialsSwiperConfig } from '@/constants/swiper-config'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Highlighter } from '@/components/ui/text_highlter'
import { motion } from 'framer-motion'
import { useRef } from 'react'

export const videoRefs = new Set<HTMLVideoElement>()

export function pauseAllVideos() {
  // Pause all videos in the testimonials section
  const testimonialsSection = document.querySelector('.testimonials-swiper')
  if (testimonialsSection) {
    const videos = testimonialsSection.querySelectorAll('video')
    videos.forEach((video) => {
      if (video && !video.paused) {
        video.pause()
        video.currentTime = 0
      }
    })
  }
  // Also pause videos in registry
  videoRefs.forEach((video) => {
    if (video && !video.paused) {
      video.pause()
      video.currentTime = 0
    }
  })
}

export default function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  const handleSlideChange = (swiper: SwiperType) => {
    // Pause all videos when slide changes
    pauseAllVideos()
  }

  const handleSlideChangeTransitionStart = () => {
    // Pause all videos immediately when transition starts
    pauseAllVideos()
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Section Header */}
          <div className="relative px-4">
       
            {/* Main Title with Unique Layout */}
            <div className="text-center mb-6">
              
              <h2
                className="text-5xl flex flex-col space-y-5 md:text-5xl lg:text-7xl font-bold text-gray-900 mb-2 relative inline-block"
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                <span className="relative z-10">
                  Stories from
                </span>
                <span className="relative mt-4 z-10">
                  <Highlighter
                    action="highlight"
                    color="#dc2626"
                    strokeWidth={2}
                    animationDuration={800}
                    iterations={2}
                    padding={4}
                    multiline={false}
                    isView={true}
                  >
                    <span className="text-white">Our Travelers</span>
                  </Highlighter>
                </span>
              </h2>
            </div>

          
            {/* Bottom Decorative Element */}
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative w-full px-4 md:px-6 lg:px-8">
            <Swiper
              {...testimonialsSwiperConfig}
              className="testimonials-swiper h-full"
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
              onSlideChange={handleSlideChange}
              onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
              onTouchStart={handleSlideChangeTransitionStart}
              onSlideNextTransitionStart={handleSlideChangeTransitionStart}
              onSlidePrevTransitionStart={handleSlideChangeTransitionStart}
            >
              {TESTIMONIALS.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="h-auto">
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="swiper-button-prev-testimonials absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-50 rounded-full p-3 md:p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200 hover:border-red-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <motion.div
                whileHover={{ scale: 1.1, x: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-red-600 transition-colors duration-300" strokeWidth={2.5} />
              </motion.div>
            </button>
            <button
              className="swiper-button-next-testimonials absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-50 rounded-full p-3 md:p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200 hover:border-red-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <motion.div
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-red-600 transition-colors duration-300" strokeWidth={2.5} />
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

