'use client'

import LogisticsServiceCard from './LogisticsServiceCard'
import { LOGISTICS_SERVICES } from '@/constants/logistics'
import { Highlighter } from '@/components/ui/text_highlter'

export default function LogisticsServiceSection() {
  return (
    <section id="logistics" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Section Header */}
          <div className="text-center px-4">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Our <Highlighter
                action="highlight"
                color="#dc2626"
                strokeWidth={2}
                animationDuration={800}
                iterations={2}
                padding={4}
                multiline={false}
                isView={true}
              >
                <span className="text-white">Logistics</span>
              </Highlighter> Services
            </h2>
           
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4 md:px-6 lg:px-8">
            {LOGISTICS_SERVICES.map((service) => (
              <LogisticsServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

