import { DESTINATIONS } from '@/constants/destinations'
import DestinationCard from './DestinationCard'

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="text-center px-4">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{ 
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                letterSpacing: '0.02em'
              }}
            >
              Explore Our Destinations
            </h2>
            <p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{ 
                fontFamily: 'var(--font-poppins)',
              }}
            >
              Discover amazing places across India with our pan-India car rental services
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 lg:px-8">
            {DESTINATIONS.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

