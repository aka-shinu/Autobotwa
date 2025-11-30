'use client'

import { LuxuryCar } from '@/types/luxury-cars'
import { Phone, MessageCircle } from 'lucide-react'
import {
  formatKilometers,
  formatYear,
  formatRegistrationState,
  getWhatsAppLink,
  getDefaultWhatsAppMessage,
} from '@/lib/luxury-cars-utils'

interface LuxuryCarCardProps {
  car: LuxuryCar
}

const PHONE_NUMBER = '18002093344'

export default function LuxuryCarCard({ car }: LuxuryCarCardProps) {
  const fullModelName = `${formatYear(car.year)} ${car.manufacturer.toUpperCase()} ${car.model.toUpperCase()}`
  const overlaySpecs = `${formatYear(car.year)} ${car.manufacturer.toUpperCase()} ${car.model.toUpperCase()} ${formatKilometers(car.kilometers)} Kms Driven | ${car.fuelType} | ${formatRegistrationState(car.registrationState)}`
  const whatsAppMessage = getDefaultWhatsAppMessage(fullModelName)
  const whatsAppLink = getWhatsAppLink(PHONE_NUMBER, whatsAppMessage)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Car Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={fullModelName}
          className="w-full h-full object-cover"
        />
        {/* Overlay with specs text */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
          <p className="text-white text-xs font-medium leading-tight mb-1">
            {overlaySpecs}
          </p>
          <p className="text-white text-xs opacity-80">
            {PHONE_NUMBER} www.yadavtourstravel.com
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Model Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {fullModelName}
        </h3>

        {/* Specifications */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium text-gray-700 w-24">Registered:</span>
            <span>{formatYear(car.year)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium text-gray-700 w-24">Fuel:</span>
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium text-gray-700 w-24">Kms:</span>
            <span>{formatKilometers(car.kilometers)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium text-gray-700 w-24">Seats:</span>
            <span>{car.seats}</span>
          </div>
          {car.singleOwner && (
            <div className="flex items-center text-sm text-gray-600">
              <span className="font-medium text-gray-700 w-24">Owner:</span>
              <span>Single Owner</span>
            </div>
          )}
        </div>

        {/* Call for Pricing Button */}
        <button className="w-full bg-amber-100 hover:bg-amber-200 text-gray-900 font-semibold py-3 px-4 rounded-lg mb-4 transition-colors duration-200">
          Call for Pricing
        </button>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}

