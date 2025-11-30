'use client'

import { TRAVEL_CARS, SEAT_GROUPS } from '@/constants/travel-cars'
import { useTravelCarsBySeats } from '@/hooks/useTravelCarsBySeats'
import TravelCarCard from './TravelCarCard'

export default function TravelCarsSection() {
  const {
    selectedSeatGroup,
    currentCars,
    handleSeatGroupChange,
  } = useTravelCarsBySeats(TRAVEL_CARS)
  console.log(currentCars)
  return (
    <section id="travel-cars" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
                {/* Seat Group Filters */}
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {SEAT_GROUPS.map((group) => {
              const isActive = selectedSeatGroup === group.value
              return (
                <button
                  key={group.id}
                  onClick={() => handleSeatGroupChange(group.value)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                  }}
                >
                  {group.label}
                </button>
              )
            })}
          </div>

          {/* Cars Grid */}
          {currentCars.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 lg:px-8">
              {currentCars.map((car) => (
                <TravelCarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No cars available for {SEAT_GROUPS.find((g) => g.value === selectedSeatGroup)?.label || 'selected'} category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

