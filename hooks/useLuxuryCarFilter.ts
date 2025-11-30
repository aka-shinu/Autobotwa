'use client'

import { useState, useMemo } from 'react'
import { LuxuryCar } from '@/types/luxury-cars'

export function useLuxuryCarFilter(cars: LuxuryCar[]) {
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('all')
  const [selectedSeats, setSelectedSeats] = useState<number | null>(null)

  const filteredCars = useMemo(() => {
    let filtered = cars

    // Filter by manufacturer
    if (selectedManufacturer !== 'all') {
      filtered = filtered.filter(
        (car) => car.manufacturer.toLowerCase().replace(/\s+/g, '-') === selectedManufacturer
      )
    }

    // Filter by seats
    if (selectedSeats !== null) {
      if (selectedSeats === 8) {
        // 8+ seats means 8 or more
        filtered = filtered.filter((car) => car.seats >= 8)
      } else {
        filtered = filtered.filter((car) => car.seats === selectedSeats)
      }
    }

    return filtered
  }, [cars, selectedManufacturer, selectedSeats])

  const handleManufacturerChange = (manufacturerId: string) => {
    setSelectedManufacturer(manufacturerId)
  }

  const handleSeatsChange = (seats: number | null) => {
    setSelectedSeats(seats)
  }

  return {
    selectedManufacturer,
    selectedSeats,
    filteredCars,
    handleManufacturerChange,
    handleSeatsChange,
  }
}

