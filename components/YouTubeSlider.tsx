'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export interface YouTubeVideo {
  id: string
  title?: string
  thumbnail?: string
}

interface YouTubeSliderProps {
  videos: YouTubeVideo[]
  autoplay?: boolean
  autoplayDelay?: number
  showNavigation?: boolean
  showPagination?: boolean
  className?: string
  height?: string
}

// Helper function to extract YouTube video ID from URL
export function extractYouTubeId(urlOrId: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = urlOrId.match(regExp)
  return match && match[2].length === 11 ? match[2] : urlOrId
}

// Helper function to get YouTube embed URL
export function getYouTubeEmbedUrl(videoId: string, autoplay: boolean = false): string {
  const cleanId = extractYouTubeId(videoId)
  return `https://www.youtube.com/embed/${cleanId}?rel=0&modestbranding=1&autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`
}

// Helper function to get YouTube thumbnail URL
export function getYouTubeThumbnail(videoId: string): string {
  const cleanId = extractYouTubeId(videoId)
  return `https://img.youtube.com/vi/${cleanId}/maxresdefault.jpg`
}

export default function YouTubeSlider({
  videos,
  autoplay = false,
  autoplayDelay = 5000,
  showNavigation = true,
  showPagination = true,
  className = '',
  height = '600px',
}: YouTubeSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set())

  // Pause all YouTube iframes when slide changes
  const pauseAllVideos = () => {
    const iframes = document.querySelectorAll('.youtube-slider iframe')
    iframes.forEach((iframe) => {
      try {
        // Try to use YouTube API to pause (if available)
        const iframeWindow = (iframe as HTMLIFrameElement).contentWindow
        if (iframeWindow) {
          iframeWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        }
      } catch (e) {
        // Fallback: reset src to pause video
        const iframeSrc = (iframe as HTMLIFrameElement).src
        ;(iframe as HTMLIFrameElement).src = iframeSrc.replace('&autoplay=1', '&autoplay=0')
      }
    })
  }

  const previousActiveIndexRef = useRef<number>(0)

  const handleSlideChange = (swiper: SwiperType) => {
    const newIndex = swiper.activeIndex
    const oldIndex = previousActiveIndexRef.current
    
    // Only reset if we're actually changing slides (different index)
    if (newIndex !== oldIndex) {
      // Pause all videos when slide changes (manual or auto navigation)
      pauseAllVideos()
      setActiveIndex(newIndex)
      // Reset playing state for all videos when slide changes
      setPlayingVideos(new Set())
      previousActiveIndexRef.current = newIndex
    }
  }

  const handleSlideChangeTransitionStart = () => {
    const currentIndex = swiperRef.current?.activeIndex ?? 0
    const previousIndex = previousActiveIndexRef.current
    
    // Only reset if we're actually changing slides (different index)
    if (currentIndex !== previousIndex) {
      // Pause all videos immediately when transition starts
      pauseAllVideos()
      // Reset playing state when transitioning to a new slide
      setPlayingVideos(new Set())
      // Stop autoplay during transition
      if (swiperRef.current && autoplay) {
        swiperRef.current.autoplay?.stop()
      }
      previousActiveIndexRef.current = currentIndex
    }
  }

  const handleManualInteraction = () => {
    // Pause autoplay on any manual interaction (touch, click, etc.)
    // But don't reset videos - only pause autoplay
    if (swiperRef.current && autoplay) {
      swiperRef.current.autoplay?.stop()
    }
  }

  const handlePlayVideo = (index: number) => {
    console.log('handlePlayVideo called for index:', index)
    // Stop autoplay immediately when video starts playing
    if (swiperRef.current && autoplay) {
      swiperRef.current.autoplay?.stop()
    }
    // Update state to trigger iframe rendering
    setPlayingVideos((prev) => {
      const newSet = new Set(prev)
      newSet.add(index)
      console.log('Setting playing videos to:', Array.from(newSet))
      return newSet
    })
  }

  // Debug: Log when playing state changes
  useEffect(() => {
    console.log('Playing videos state changed:', Array.from(playingVideos))
  }, [playingVideos])

  // Pause/resume Swiper autoplay when videos are playing (but don't block navigation)
  useEffect(() => {
    if (!swiperRef.current) return

    const hasPlayingVideos = playingVideos.size > 0
    console.log('Updating Swiper autoplay, hasPlayingVideos:', hasPlayingVideos)

    if (hasPlayingVideos) {
      // Pause Swiper autoplay when video is playing (but allow manual navigation)
      if (autoplay) {
        swiperRef.current.autoplay?.stop()
      }
    } else {
      // Resume Swiper autoplay when no videos are playing
      if (autoplay) {
        swiperRef.current.autoplay?.start()
      }
    }
  }, [playingVideos, autoplay])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      pauseAllVideos()
    }
  }, [])

  if (!videos || videos.length === 0) {
    return (
      <div className="flex items-center justify-center p-12 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No videos available</p>
      </div>
    )
  }

  return (
    <div className={`youtube-slider relative ${className}`} style={{ height }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={
          autoplay && playingVideos.size === 0
            ? {
                delay: autoplayDelay,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={
          showPagination
            ? {
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-600',
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: '.swiper-button-next-youtube',
                prevEl: '.swiper-button-prev-youtube',
              }
            : false
        }
        loop={videos.length > 1}
        className="h-full w-full"
        simulateTouch={true}
        touchStartPreventDefault={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        onSlideNextTransitionStart={handleSlideChangeTransitionStart}
        onSlidePrevTransitionStart={handleSlideChangeTransitionStart}
      >
        {videos.map((video, index) => {
          const videoId = extractYouTubeId(video.id)
          const thumbnail = video.thumbnail || getYouTubeThumbnail(videoId)
          const isPlaying = playingVideos.has(index)

          return (
            <SwiperSlide key={`${videoId}-${index}`} className="relative h-full w-full">
              <div className="relative h-full w-full bg-black rounded-lg overflow-hidden group">
                {!isPlaying ? (
                  <>
                    {/* Thumbnail with play button overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center pointer-events-none"
                      style={{ backgroundImage: `url(${thumbnail})` }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    </div>

                    {/* Play Button Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center z-50"
                      style={{ pointerEvents: 'none' }}
                    >
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          e.preventDefault()
                          console.log('Play button clicked directly, index:', index)
                          handlePlayVideo(index)
                        }}
                        onMouseDown={(e) => {
                          e.stopPropagation()
                          e.preventDefault()
                        }}
                        onTouchStart={(e) => {
                          e.stopPropagation()
                          e.preventDefault()
                        }}
                        className="bg-red-600 hover:bg-red-700 rounded-full p-4 md:p-6 shadow-2xl transition-all duration-300 group/play cursor-pointer z-50"
                        style={{ pointerEvents: 'auto' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Play video"
                        type="button"
                      >
                        <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-1 group-hover/play:scale-110 transition-transform" fill="currentColor" />
                      </motion.button>
                    </div>

                    {/* Video Title (if provided) */}
                    {video.title && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 md:p-6 z-10">
                        <h3 className="text-white text-lg md:text-xl font-semibold drop-shadow-lg">
                          {video.title} 
                        </h3>
                      </div>
                    )}
                  </>
                ) : (
                  /* YouTube iframe when playing */
                  <div className="absolute inset-0 w-full h-full">
                    <iframe
                      key={`youtube-${videoId}-${index}`}
                      src={getYouTubeEmbedUrl(videoId, true)}
                      title={video.title || `YouTube video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      {/* Navigation Buttons */}
      {showNavigation && videos.length > 1 && (
        <>
          <button
            className="swiper-button-prev-youtube absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 rounded-full p-3 md:p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-red-500/50 hover:border-red-300 cursor-pointer"
            aria-label="Previous video"
            onClick={handleManualInteraction}
          >
            <motion.div
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
            </motion.div>
          </button>
          <button
            className="swiper-button-next-youtube absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 rounded-full p-3 md:p-3.5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-red-500/50 hover:border-red-300 cursor-pointer"
            aria-label="Next video"
            onClick={handleManualInteraction}
          >
            <motion.div
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
            </motion.div>
          </button>
        </>
      )}
    </div>
  )
}

