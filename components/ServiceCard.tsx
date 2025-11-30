'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Service } from '@/types/services'

export default function ServiceCard({ title, description, features, href, image }: Service) {
  const pathname = usePathname()

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If on home page, scroll to sections instead of navigating
    if (pathname === '/') {
      if (href === '/services/logistics') {
        e.preventDefault()
        const logisticsSection = document.getElementById('logistics')
        if (logisticsSection) {
          logisticsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else if (href === '/services/car-rental') {
        e.preventDefault()
        const travelCarsSection = document.getElementById('travel-cars')
        if (travelCarsSection) {
          travelCarsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }
      // Otherwise, let default navigation happen
    }
  }
  return (
    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square flex flex-col">
      {/* Background Image with Multiple Effects */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-125 group-hover:brightness-110"
        style={{
          backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        {/* Animated Gradient Overlay with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50 group-hover:from-black/98 group-hover:via-black/85 group-hover:to-black/60 transition-all duration-700" />
        
        {/* Shimmer/Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-1000" />
        
        {/* Additional Depth Layer */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.6) 100%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8 text-white">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-white group-hover:text-white transition-all duration-300 group-hover:translate-y-[-2px] font-serif">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-200 mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
          {description}
        </p>
        
        {/* Features */}
        <ul className="space-y-1.5 sm:space-y-2 md:space-y-3 mb-4 sm:mb-6 md:mb-8">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-100 text-xs sm:text-sm flex items-start group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-400 group-hover:scale-110 transition-all duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path 
                  fillRule="evenodd" 
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Premium Enhanced Button */}
        <div className="mt-auto">
          <Link 
            href={href}
            onClick={handleServiceClick}
            className="group/btn relative inline-flex items-center justify-center w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg font-bold text-white bg-gradient-to-r from-red-600 via-red-600 to-red-700 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-red-500/60 transform hover:scale-[1.02] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            
            {/* Pulsing Glow Effect */}
            <div className="absolute inset-0 bg-red-500 rounded-xl opacity-0 group-hover/btn:opacity-75 group-hover/btn:animate-pulse blur-xl -z-10" />
            
            {/* Outer Glow Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-xl opacity-0 group-hover/btn:opacity-50 blur-md transition-opacity duration-500 -z-20" />
            
            {/* Shimmer/Shine Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Ripple Effect Layer */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 group-hover/btn:opacity-0 transition-all duration-1000 rounded-full" 
                style={{ transformOrigin: 'center' }}
              />
            </div>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 tracking-wide">
              <span className="relative">
                Explore Service
                {/* Text Underline Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover/btn:w-full transition-all duration-500" />
              </span>
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform group-hover/btn:translate-x-2 transition-transform duration-500 group-hover/btn:scale-110" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-t-2 border-l-2 border-white/30 rounded-tl-lg sm:rounded-tl-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-t-2 border-r-2 border-white/30 rounded-tr-lg sm:rounded-tr-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-b-2 border-l-2 border-white/30 rounded-bl-lg sm:rounded-bl-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 border-b-2 border-r-2 border-white/30 rounded-br-lg sm:rounded-br-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>
      </div>
      
      {/* Additional Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-red-500/0 group-hover:border-red-500/50 transition-all duration-500 pointer-events-none" />
    </div>
  )
}


