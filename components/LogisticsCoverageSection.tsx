'use client'

import { CoverageRegion } from '@/types/logistics'
import { INDIA_COVERAGE, INTERNATIONAL_COVERAGE } from '@/constants/logistics'
import { getRegionLocations } from '@/lib/logistics-utils'

export default function LogisticsCoverageSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* India Coverage */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Pan-India Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics services across all major cities and industrial hubs in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDIA_COVERAGE.map((region) => (
              <CoverageCard key={region.id} region={region} />
            ))}
          </div>
        </div>

        {/* International Coverage */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              International Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ship from India to anywhere in the world with our global logistics network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTERNATIONAL_COVERAGE.map((region) => (
              <CoverageCard key={region.id} region={region} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface CoverageCardProps {
  region: CoverageRegion
}

function CoverageCard({ region }: CoverageCardProps) {
  const locations = getRegionLocations(region.cities, region.countries)
  const isDomestic = region.type === 'domestic'

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
          isDomestic 
            ? 'bg-red-100 text-red-600' 
            : 'bg-amber-100 text-amber-600'
        }`}>
          {isDomestic ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2h2.945M3.055 11H5m0 0a2 2 0 002 2v1a2 2 0 002 2 2 2 0 002 2h2.945m-6.89 0H9m0 0a2 2 0 002-2v-1a2 2 0 012-2h2.945M9 11H5m4 0v1m0 0a2 2 0 002 2h2.945M9 13h2.945M9 13v-1m0 1a2 2 0 01-2 2H5m6.945-2h2.945M13 13v1a2 2 0 002 2h2.945M13 14h-2.945M13 14v-1m0 0a2 2 0 012-2h2.945M13 12h-2.945" />
            </svg>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{region.name}</h3>
      </div>

      {region.description && (
        <p className="text-gray-600 text-sm mb-4">{region.description}</p>
      )}

      {locations.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            {isDomestic ? 'Cities:' : 'Countries:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {locations.map((location, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {location}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}














