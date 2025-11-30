import Image from 'next/image'
import { Destination } from '@/types/destinations'

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  const nameParts = destination.name.split(',').map(part => part.trim())
  const mainTitle = nameParts[0]
  const location = nameParts.length > 1 ? nameParts[1] : ''

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-square flex flex-col">
      {/* Background Image with Cleaner Processing */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(1.15) contrast(1.25) saturate(1.15)',
          }}
        />
        
        {/* Cleaner Gradient Overlay - Lighter overall, only dark at bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent group-hover:from-black/75 group-hover:via-black/30 transition-all duration-700" />
        
        {/* Text Readability Layer - Dark bottom bar, only where text is */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      
      {/* Content with Better Text Readability */}
      <div className="relative z-10 flex flex-col h-full p-6 md:p-8 text-white justify-end gap-1">
        {/* Main Title */}
        <h3 
          className="text-lg md:text-xl lg:text-2xl font-bold text-white transition-all duration-300 group-hover:translate-y-[-4px] font-serif leading-tight"
          style={{
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)',
          }}
        >
          {mainTitle}
        </h3>
        
        {/* Location (separate) */}
        {location && (
          <p 
            className="text-xs md:text-sm lg:text-base font-medium text-white/90 transition-all duration-300 group-hover:translate-y-[-4px] font-sans"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.6)',
            }}
          >
            {location}
          </p>
        )}
      </div>
      
      {/* Subtle Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
    </div>
  )
}

