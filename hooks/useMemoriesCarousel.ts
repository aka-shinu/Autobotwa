import { useState, useCallback, useRef } from 'react'
import { Swiper as SwiperType } from 'swiper'

export interface UseMemoriesCarouselReturn {
  swiperRef: React.MutableRefObject<SwiperType | null>
  activeIndex: number
  isTransitioning: boolean
  transitionDirection: 'left' | 'right'
  goToNext: () => void
  goToPrev: () => void
  goToSlide: (index: number) => void
  handleSwiperInit: (swiper: SwiperType) => void
  handleSlideChange: (swiper: SwiperType) => void
}

/**
 * Custom hook for managing memories carousel state and navigation
 */
export function useMemoriesCarousel(totalSlides: number): UseMemoriesCarouselReturn {
  const swiperRef = useRef<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right'>('right')
  const previousIndexRef = useRef(0)

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper
    // Use realIndex for accurate tracking when loop is enabled
    const currentIndex = swiper.realIndex ?? swiper.activeIndex
    setActiveIndex(currentIndex)
    previousIndexRef.current = currentIndex
  }, [])

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    // Use realIndex for accurate tracking when loop is enabled
    const currentIndex = swiper.realIndex ?? swiper.activeIndex
    const previousIndex = previousIndexRef.current

    // Determine direction based on index change
    // For loop mode, we need to handle wrap-around cases
    let direction: 'left' | 'right' = 'right'
    if (previousIndex !== currentIndex) {
      // Simple case: forward movement
      if (currentIndex > previousIndex) {
        direction = 'right'
      } else if (currentIndex < previousIndex) {
        direction = 'left'
      } else {
        // Handle loop wrap-around (when going from last to first or vice versa)
        // Check if we're at the beginning or end
        if (previousIndex === totalSlides - 1 && currentIndex === 0) {
          direction = 'right'
        } else if (previousIndex === 0 && currentIndex === totalSlides - 1) {
          direction = 'left'
        }
      }
    }

    setTransitionDirection(direction)
    setIsTransitioning(true)
    setActiveIndex(currentIndex)
    previousIndexRef.current = currentIndex

    // Reset transitioning state after animation
    setTimeout(() => {
      setIsTransitioning(false)
    }, 1000)
  }, [totalSlides])

  const goToNext = useCallback(() => {
    if (swiperRef.current) {
      setTransitionDirection('right')
      swiperRef.current.slideNext()
    }
  }, [])

  const goToPrev = useCallback(() => {
    if (swiperRef.current) {
      setTransitionDirection('left')
      swiperRef.current.slidePrev()
    }
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (swiperRef.current && index >= 0 && index < totalSlides) {
      swiperRef.current.slideTo(index)
    }
  }, [totalSlides])

  return {
    swiperRef,
    activeIndex,
    isTransitioning,
    transitionDirection,
    goToNext,
    goToPrev,
    goToSlide,
    handleSwiperInit,
    handleSlideChange,
  }
}

