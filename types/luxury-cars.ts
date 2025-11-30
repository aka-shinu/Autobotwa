export interface LuxuryCar {
  id: string
  manufacturer: string
  model: string
  year: number
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid'
  kilometers: number
  registrationState: string
  image: string
  description?: string
  singleOwner?: boolean
  seats: number
}

export interface Manufacturer {
  id: string
  name: string
}

