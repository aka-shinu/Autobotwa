'use client'

import { Testimonial } from '@/types/testimonials'
import { Star, MapPin, Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { pauseAllVideos, videoRefs } from './TestimonialsSection'

export default function TestimonialCard({
  clientName,
  location,
  rating,
  service,
  videoUrl,
  thumbnail,
  quote,
}: Testimonial) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoError, setIsVideoError] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Render stars based on rating
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => {
      const isFilled = index < rating
      return (
        <Star
          key={index}
          className={`w-5 h-5 ${
            isFilled
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-gray-200 text-gray-200'
          } transition-colors duration-200`}
          strokeWidth={2}
        />
      )
    })
  }

  // Service badge colors
  const getServiceBadgeColor = (serviceType: string) => {
    switch (serviceType.toLowerCase()) {
      case 'car rental':
        return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'luxury cars':
        return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'logistics':
        return 'bg-green-100 text-green-700 border-green-200'
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  // Video control handlers
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        setHasStartedPlaying(true)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
    setHasStartedPlaying(true)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  // Auto-hide controls after 3 seconds when playing
  useEffect(() => {
    if (isPlaying && hasStartedPlaying) {
      const timer = setTimeout(() => {
        setShowControls(false)
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setShowControls(true)
    }
  }, [isPlaying, hasStartedPlaying])

  // Register video in global registry when video element is available
  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      // Retry if video is not available yet
      const timer = setTimeout(() => {
        const retryVideo = videoRef.current
        if (retryVideo) {
          videoRefs.add(retryVideo)
        }
      }, 100)
      return () => clearTimeout(timer)
    }

    // Register video element
    videoRefs.add(video)

    return () => {
      // Unregister on unmount
      videoRefs.delete(video)
    }
  }, [isVideoLoaded]) // Re-run when video is loaded

  // Video loading timeout and error handling
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Pause and reset previous video when URL changes
    pauseAllVideos()
    video.currentTime = 0
    setIsPlaying(false)
    setHasStartedPlaying(false)
    
    // Reset loading state when video URL changes
    setIsVideoLoaded(false)
    setIsVideoError(false)

    // Set a timeout for video loading (10 seconds)
    loadingTimeoutRef.current = setTimeout(() => {
      if (video.readyState < 2) { // HAVE_CURRENT_DATA
        console.warn('Video loading timeout:', videoUrl)
        setIsVideoError(true)
        setIsVideoLoaded(false)
      }
    }, 10000)

    // Multiple event handlers for better compatibility
    const handleLoadedMetadata = () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      setIsVideoLoaded(true)
      setIsVideoError(false)
    }

    const handleCanPlay = () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      setIsVideoLoaded(true)
      setIsVideoError(false)
    }

    const handleLoadedData = () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      setIsVideoLoaded(true)
      setIsVideoError(false)
    }

    const handleError = (e: Event) => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      console.error('Video error:', video.error, videoUrl)
      setIsVideoError(true)
      setIsVideoLoaded(false)
    }

    const handleStalled = () => {
      console.warn('Video stalled:', videoUrl)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)
    video.addEventListener('stalled', handleStalled)

    // Try to load the video
    video.load()

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current)
      }
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
      video.removeEventListener('stalled', handleStalled)
    }
  }, [videoUrl])

  // Show controls on mouse move
  const handleMouseMove = () => {
    setShowControls(true)
  }

  // Pause and reset video when it's not visible (using Intersection Observer)
  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
            // Video is not visible or less than 30% visible - pause and reset
            if (video && !video.paused) {
              video.pause()
              setIsPlaying(false)
            }
            // Reset video to beginning
            if (video) {
              video.currentTime = 0
              setHasStartedPlaying(false)
            }
          }
        })
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1.0], // Multiple thresholds for better detection
        rootMargin: '-10% 0px -10% 0px', // Add margin to detect when slide is mostly out of view
      }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Video Section */}
      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-gray-900 overflow-hidden rounded-t-2xl group/video cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          if (isPlaying) {
            setShowControls(false)
          }
        }}
      >
        {/* Loading State */}
        {!isVideoLoaded && !isVideoError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 z-20">
            <div className="relative">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-red-600"></div>
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-red-600/30"></div>
            </div>
            <p className="mt-4 text-sm text-gray-400" style={{ fontFamily: 'var(--font-poppins)' }}>
              Loading video...
            </p>
          </div>
        )}

        {/* Error State */}
        {isVideoError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 z-20">
            <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--font-poppins)' }}>
              Video unavailable
            </p>
          </div>
        )}

        {/* Video Element */}
        <video
          ref={videoRef}
          className={`w-full h-full object-contain transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          preload="auto"
          muted={isMuted}
          playsInline
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onClick={handleVideoClick}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Play Button Overlay (before playing) */}
        <AnimatePresence>
          {!hasStartedPlaying && isVideoLoaded && !isVideoError && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-10"
              onClick={handleVideoClick}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/play"
              >
                <div className="absolute inset-0 bg-red-600 rounded-full blur-xl opacity-50 group-hover/play:opacity-75 transition-opacity"></div>
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover/play:bg-red-700 transition-colors">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="white" />
                </div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom Controls Overlay */}
        <AnimatePresence>
          {showControls && hasStartedPlaying && isVideoLoaded && !isVideoError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex items-end justify-center pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 px-4">
                {/* Play/Pause Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                  )}
                </motion.button>

                {/* Mute/Unmute Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-0"></div>
      </div>

      {/* Client Information Section */}
      <div className="p-6 md:p-8 space-y-4">
        {/* Client Name and Location */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
              style={{
                fontFamily: 'var(--font-playfair)',
              }}
            >
              {clientName}
            </h3>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span
                className="text-sm md:text-base"
                style={{
                  fontFamily: 'var(--font-poppins)',
                }}
              >
                {location}
              </span>
            </div>
          </div>

          {/* Service Badge */}
          <div
            className={`px-4 py-2 rounded-full border text-sm font-semibold whitespace-nowrap ${getServiceBadgeColor(
              service
            )}`}
            style={{
              fontFamily: 'var(--font-poppins)',
            }}
          >
            {service}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">{renderStars()}</div>
          <span
            className="text-sm font-semibold text-gray-700"
            style={{
              fontFamily: 'var(--font-poppins)',
            }}
          >
            {rating}.0
          </span>
        </div>

        {/* Testimonial Quote */}
        <div className="pt-4 border-t border-gray-200">
          <p
            className="text-base md:text-lg text-gray-700 leading-relaxed italic"
            style={{
              fontFamily: 'var(--font-poppins)',
            }}
          >
            &ldquo;{quote}&rdquo;
          </p>
        </div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-red-500/0 group-hover:border-red-500/30 transition-all duration-500 pointer-events-none" />
    </motion.div>
  )
}

