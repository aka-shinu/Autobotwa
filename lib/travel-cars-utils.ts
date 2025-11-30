import { TravelCar } from '@/types/travel-cars'
import { getWhatsAppLink as getLuxuryCarWhatsAppLink } from './luxury-cars-utils'

/**
 * Group cars by seat capacity
 */
export function groupCarsBySeats(cars: TravelCar[]): Record<number, TravelCar[]> {
  const grouped: Record<number, TravelCar[]> = {}

  cars.forEach((car) => {
  
    const seatKey = car.seats >= 8 ? 8 : car.seats
    if (!grouped[seatKey]) {
      grouped[seatKey] = []
    }
    grouped[seatKey].push(car)
  })

  return grouped
}

/**
 * Format car display name
 */
export function formatCarName(car: TravelCar): string {
  return `${car.year} ${car.manufacturer} ${car.model}`
}

/**
 * Generate WhatsApp link with pre-filled message
 * Reuses the function from luxury-cars-utils to follow DRY principles
 */
export function getWhatsAppLink(phone: string, message: string): string {
  return getLuxuryCarWhatsAppLink(phone, message)
}

/**
 * Get default WhatsApp message for travel car rental inquiry
 */
export function getDefaultWhatsAppMessage(carName: string): string {
  return `Hello! I'm interested in renting the ${carName} for travel. Please provide more details about availability and rental terms.`
}

