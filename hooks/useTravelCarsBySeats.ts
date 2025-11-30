'use client'

import { useState, useMemo } from 'react'
import { TravelCar } from '@/types/travel-cars'
import { groupCarsBySeats } from '@/lib/travel-cars-utils'

export function useTravelCarsBySeats(cars: TravelCar[]) {
  const [selectedSeatGroup, setSelectedSeatGroup] = useState<number>(0) // Default to 5 seats

  const carsBySeats = useMemo(() => {
    return groupCarsBySeats(cars)
  }, [cars])

  const currentCars = useMemo(() => {
    var keys
    if (selectedSeatGroup === 8) {
      // For 8+, show all cars with 8 or more seats
      return cars.filter((car) => car.seats >= 8)
    }
    else if (selectedSeatGroup === 0) {
      return cars
    }
    return carsBySeats[selectedSeatGroup] || []
  }, [cars, carsBySeats, selectedSeatGroup])

  const handleSeatGroupChange = (seatGroup: number) => {
    console.log(seatGroup)
    setSelectedSeatGroup(seatGroup)
  }

  return {
    selectedSeatGroup,
    carsBySeats,
    currentCars,
    handleSeatGroupChange,
  }
}











