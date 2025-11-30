import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import type { SwiperOptions } from 'swiper/types'

export const servicesSwiperConfig: SwiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 24,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1.5,
    },
    1280: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next-services',
    prevEl: '.swiper-button-prev-services',
  },
  pagination: {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  loop: true,
}

export const memoriesSwiperConfig: SwiperOptions = {
  modules: [Navigation, EffectFade],
  spaceBetween: 0,
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next-memories',
    prevEl: '.swiper-button-prev-memories',
  },
  loop: true,
  grabCursor: true,
  allowTouchMove: false, // Disable touch/swipe since we're using scroll hijacking
}

export const testimonialsSwiperConfig: SwiperOptions = {
  modules: [Navigation, Pagination],
  spaceBetween: 24,
  slidesPerView: 1, // Single slide on all screen sizes
  navigation: {
    nextEl: '.swiper-button-next-testimonials',
    prevEl: '.swiper-button-prev-testimonials',
  },
  pagination: {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  },
  loop: true,
}


