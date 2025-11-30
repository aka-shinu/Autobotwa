'use client'

import Image from 'next/image'
import { LogisticsService } from '@/types/logistics'
import { Truck, Plane, Ship } from 'lucide-react'

interface LogisticsServiceCardProps {
  service: LogisticsService
}

const transportIcons = {
  Air: Plane,
  Sea: Ship,
  Road: Truck,
}

export default function LogisticsServiceCard({ service }: LogisticsServiceCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={service.icon}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 
          className="text-xl font-semibold text-gray-900 mb-3"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Transport Modes - Simple Icons */}
        <div className="flex items-center gap-3">
          {service.transportModes.map((mode) => {
            const Icon = transportIcons[mode]
            return (
              <div key={mode} className="flex items-center gap-1.5 text-sm text-gray-600">
                <Icon className="w-4 h-4 text-gray-400" />
                <span className="font-medium">{mode}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}




