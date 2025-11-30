"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "./Button";
import Image from "next/image";
import {
  CheckCircle2,
  MapPin,
  Calendar,
  Car as CarIcon,
  ArrowRight,
  Users,
} from "lucide-react";
import { Pointer } from "./ui/pointer";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marq";

const slides = [
  {
    image: "/images/hero/tourist_spots/taj_mahal.jpg",
    title: "Bharat Ki Virasat Ko Explore Karein",
    titleEn: "Explore India's Heritage",
    subtitle:
      "Hamari reliable car rental services ke saath iconic destinations visit karein",
    subtitleEn:
      "Visit iconic destinations with our reliable car rental services",
    textColor: "text-white",
  },
  {
    image: "/images/hero/tourist_spots/kedarnath.jpg",
    title: "Yaadgar Travel Experiences",
    titleEn: "Memorable Travel Experiences",
    subtitle: "Road par unforgettable moments create karte hain",
    subtitleEn: "Creating unforgettable moments on the road",
    textColor: "text-white",
  },
  {
    image: "/images/hero/tourist_spots/vrid.jpg",
    title: "Family Trips Ke Liye Perfect",
    titleEn: "Perfect for Family Trips",
    subtitle: "Aapke loved ones ke liye safe aur comfortable journeys",
    subtitleEn: "Safe and comfortable journeys for your loved ones",
    textColor: "text-white",
  },
  {
    image: "/images/hero/tourist_spots/golden.jpg",
    title: "Aapki Journey, Hamari Priority",
    titleEn: "Your Journey, Our Priority",
    subtitle: "Bharat bhar mein premium car rental services",
    subtitleEn: "Premium car rental services across India",
    textColor: "text-white",
  },
  {
    image: "/images/hero/tourist_spots/rajasthan.jpg",
    title: "Family Trips Ke Liye Perfect",
    titleEn: "Perfect for Family Trips",
    subtitle: "Aapke loved ones ke liye safe aur comfortable journeys",
    subtitleEn: "Safe and comfortable journeys for your loved ones",
    textColor: "text-white",
  },
];

const marqueeTexts = [
  "5000+ Happy Customers Trust Us Every Month • Bharat Ki Har Kone Tak Pahuch Rahe Hain • Premium Travel Solutions",
  "Luxury Cars Se Budget Cars Tak • Sab Kuch Milega Aapki Budget Mein • Choose Your Perfect Ride",
  "One-Click Booking • Instant Confirmation • No Hidden Charges • Zero Hassle • Book in 60 Seconds",
  "15+ Years of Excellence • 50+ Cities • 1000+ Vehicles • Your Trust, Our Commitment • Proven Track Record",
  "Premium Experience, Affordable Prices • Aapki Dream Trip, Hamari Guarantee • Memories That Last Forever",
  "Hot Deals: Flat 20% Off on Weekend Getaways • Book Now & Save Big • Limited Time Offer",
  "Same-Day Booking Available • Emergency? Call Us Anytime • 24/7 Roadside Assistance • Always Here for You",
  "Special Packages for Weddings, Events & Corporate Travel • Customize Karo, Enjoy Karo • Tailored Solutions",
  "4.8/5 Rating from 10,000+ Reviews • Quality Service, Guaranteed Satisfaction • Join the Happy Travelers",
  "Explore Kashmir to Kanyakumari • One Click Away from Your Perfect Journey • Discover India with Us",
];

export default function Hero() {
  return (
    <section className="relative h-[1000px] w-full">
      {/* Professional Moving Marquee at Top */}
      <div className="absolute top-0 left-0 right-0 z-40 bg-black shadow-lg">
        <div className="overflow-hidden relative">
          {/* Red accent stripes */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-600/10 to-transparent"></div>

          <Marquee
            texts={[
              "Luxury Getaways",
              "Adventure Tours",
              "Beach Escapes",
              "Mountain Expeditions",
              "Cultural Experiences",
              "Wildlife Safaris",
            ]}
            speed="normal"
          />
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-red-600",
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover w-full h-full transition-transform duration-700 ease-out scale-105 hover:scale-100"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  filter: "brightness(0.9) contrast(1.1) saturate(1.2)",
                }}
              />

              {/* Beautiful Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

              {/* Vignette Effect */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)",
                }}
              ></div>

              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>

              {/* Text Content - Centered on Images */}
              <div className="absolute left-0 right-0 bottom-0 -top-[250px] md:inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 z-10 w-full">
                  <div className="max-w-3xl mx-auto text-center px-2">
                    <h2 className="text-xl sm:text-xl md:text-3xl lg:text-5xl font-bold text-white/95 mb-2 sm:mb-3 md:mb-4 drop-shadow-lg break-words">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow-lg mb-2 px-2">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Form - Just Above Slider Dots */}
              <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-20 left-0 right-0 z-20">
                <div className="container mx-auto px-2 sm:px-4 w-full">
                  <div className="max-w-5xl mx-auto">
                    {/* Booking Form - Premium Design */}
                    <div className="relative">
                      {/* Main Form Container */}
                      <div className="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl shadow-2xl border border-red-200/50 overflow-hidden">
                        {/* Form Header - Compact */}
                        <div className="bg-gradient-to-r from-red-600 to-red-700 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5">
                          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                            <div className="bg-white/20 p-0.5 sm:p-1 md:p-1.5 rounded sm:rounded-lg backdrop-blur-sm flex-shrink-0">
                              <CarIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-white" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg truncate">
                                Plan Your Journey
                              </h3>
                              <p className="text-red-100 text-[10px] sm:text-xs md:text-sm truncate hidden sm:block">
                                Book your ride in 3 simple steps
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Form Body - Compact */}
                        <div className="p-1.5 sm:p-2.5 md:p-3 lg:p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                            {/* Pickup Location */}
                            <div className="lg:col-span-1 relative group">
                              <label className="block text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-lg mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                                Pickup Location
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-1.5 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 z-10" />
                                <input
                                  type="text"
                                  placeholder="City or Airport"
                                  className="w-full pl-7 sm:pl-8 md:pl-10 pr-1.5 sm:pr-2 md:pr-3 py-1.5 sm:py-2 md:py-2.5 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-200 sm:border-2 rounded focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 sm:focus:ring-2 focus:ring-red-500/20 transition-all text-xs sm:text-sm font-medium"
                                />
                              </div>
                            </div>

                            {/* Drop Location */}
                            <div className="lg:col-span-1 relative group">
                              <label className="block text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-lg mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                                Drop Location
                              </label>
                              <div className="relative">
                                <MapPin className="absolute left-1.5 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 z-10" />
                                <input
                                  type="text"
                                  placeholder="City or Airport"
                                  className="w-full pl-7 sm:pl-8 md:pl-10 pr-1.5 sm:pr-2 md:pr-3 py-1.5 sm:py-2 md:py-2.5 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-200 sm:border-2 rounded focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 sm:focus:ring-2 focus:ring-red-500/20 transition-all text-xs sm:text-sm font-medium"
                                />
                              </div>
                            </div>

                            {/* Travel Date */}
                            <div className="lg:col-span-1 relative group">
                              <label className="block text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-lg mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                                Travel Date
                              </label>
                              <div className="relative">
                                <Calendar className="absolute left-1.5 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 z-10" />
                                <input
                                  type="date"
                                  className="w-full pl-7 sm:pl-8 md:pl-10 pr-1.5 sm:pr-2 md:pr-3 py-1.5 sm:py-2 md:py-2.5 text-gray-900 bg-gray-50 border border-gray-200 sm:border-2 rounded focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 sm:focus:ring-2 focus:ring-red-500/20 transition-all text-xs sm:text-sm font-medium cursor-pointer"
                                />
                              </div>
                            </div>

                            {/* Service Type */}
                            <div className="lg:col-span-1 relative group">
                              <label className="block text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-lg mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                                Service Type
                              </label>
                              <div className="relative">
                                <CarIcon className="absolute left-1.5 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 z-10 pointer-events-none" />
                                <select className="w-full pl-7 sm:pl-8 md:pl-10 pr-6 sm:pr-7 md:pr-8 py-1.5 sm:py-2 md:py-2.5 text-gray-900 bg-gray-50 border border-gray-200 sm:border-2 rounded focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 sm:focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer transition-all text-xs sm:text-sm font-medium">
                                  <option value="">Select</option>
                                  <option value="car-rental">Car Rental</option>
                                  <option value="luxury">Luxury Car</option>
                                  <option value="logistics">Logistics</option>
                                </select>
                                <svg
                                  className="absolute right-1.5 sm:right-2 md:right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 pointer-events-none"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Additional Info Row - Compact */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mt-1.5 sm:mt-2 md:mt-3">
                            {/* Passengers */}
                            <div className="relative">
                              <label className="block text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-lg mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                                Passengers
                              </label>
                              <div className="relative">
                                <Users className="absolute left-1.5 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 z-10" />
                                <select className="w-full pl-7 sm:pl-8 md:pl-10 pr-6 sm:pr-7 md:pr-8 py-1.5 sm:py-2 md:py-2.5 text-gray-900 bg-gray-50 border border-gray-200 sm:border-2 rounded focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 sm:focus:ring-2 focus:ring-red-500/20 appearance-none cursor-pointer transition-all text-xs sm:text-sm font-medium">
                                  <option value="1">1 Passenger</option>
                                  <option value="2">2 Passengers</option>
                                  <option value="3">3 Passengers</option>
                                  <option value="4">4 Passengers</option>
                                  <option value="5">5+ Passengers</option>
                                </select>
                                <svg
                                  className="absolute right-1.5 sm:right-2 md:right-2.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-red-600 pointer-events-none"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>

                            {/* Phone Number */}
                            <div className="relative">
                              <label className="block text-[9px] sm:text-[10px] md:text-xs font-semibold text-white drop-shadow-lg mb-0.5 sm:mb-1 md:mb-1.5 uppercase tracking-wide">
                                Contact Number
                              </label>
                              <input
                                type="tel"
                                placeholder="+91 98765 43210"
                                className="w-full px-1.5 sm:px-2 md:px-3 py-1.5 sm:py-2 md:py-2.5 text-gray-900 placeholder-gray-500 bg-gray-50 border border-gray-200 sm:border-2 rounded focus:outline-none focus:border-red-500 focus:bg-white focus:shadow-md focus:ring-1 sm:focus:ring-2 focus:ring-red-500/20 transition-all text-xs sm:text-sm font-medium"
                              />
                            </div>

                            {/* Submit Button */}
                            <div className="relative flex items-end sm:col-span-2 md:col-span-1">
                              <Pointer>
                                <motion.div
                                  animate={{
                                    scale: [0.8, 1, 0.8],
                                    rotate: [0, 10, -10, 0],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  }}
                                  className="hidden sm:block"
                                >
                                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                                </motion.div>
                              </Pointer>
                              <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-2.5 rounded sm:rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-100 flex items-center justify-center gap-1.5 sm:gap-2 group">
                                <span className="text-[10px] sm:text-xs md:text-sm font-semibold">
                                  Search Vehicles
                                </span>
                                <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* T&C Text */}
                    <p className="text-white/70 text-[9px] sm:text-[10px] md:text-xs text-center mt-11 sm:mt-1.5 md:mt-2">
                      T&C Apply
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
