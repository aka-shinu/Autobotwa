'use client'

import { TravelCar } from '@/types/travel-cars'
import { Users, Fuel } from 'lucide-react'
import {
  formatCarName,
  getWhatsAppLink,
  getDefaultWhatsAppMessage,
} from '@/lib/travel-cars-utils'

interface TravelCarCardProps {
  car: TravelCar
}

const PHONE_NUMBER = '18002093344'

export default function TravelCarCard({ car }: TravelCarCardProps) {
  const carName = formatCarName(car)
  const whatsAppMessage = getDefaultWhatsAppMessage(carName)
  const whatsAppLink = getWhatsAppLink(PHONE_NUMBER, whatsAppMessage)

  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
      {/* Car Image */}
      <div className="relative  overflow-hidden bg-gray-100">
        <img
          src={car.image}
          alt={carName}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Car Name */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
          {car.manufacturer} {car.model}
        </h3>

        {/* Specifications - Simple and Clean */}
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-gray-400" />
            <span className="font-medium">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="w-4 h-4 text-gray-400" />
            <span>{car.fuelType}</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          Book Now
        </a>
      </div>
    </div>
  )
}

