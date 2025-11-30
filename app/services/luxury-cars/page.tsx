'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ManufacturerFilter from '@/components/ManufacturerFilter'
import SeatsFilter from '@/components/SeatsFilter'
import LuxuryCarCard from '@/components/LuxuryCarCard'
import { BackgroundGradientAnimation } from '@/components/ui/bg_gradient'
import { useLuxuryCarFilter } from '@/hooks/useLuxuryCarFilter'
import { LUXURY_CARS, MANUFACTURERS, SEAT_OPTIONS } from '@/constants/luxury-cars'

export default function LuxuryCarsPage() {
  const {
    selectedManufacturer,
    selectedSeats,
    filteredCars,
    handleManufacturerChange,
    handleSeatsChange,
  } = useLuxuryCarFilter(LUXURY_CARS)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Page Header */}
        {/* <section className="relative overflow-hidden min-h-[70vh] flex items-center">
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(17, 24, 39)"
            gradientBackgroundEnd="rgb(3, 7, 18)"
            firstColor="220, 38, 38"
            secondColor="239, 68, 68"
            thirdColor="251, 191, 36"
            fourthColor="220, 38, 38"
            fifthColor="239, 68, 68"
            pointerColor="251, 191, 36"
            size="80%"
            blendingValue="hard-light"
            interactive={true}
            containerClassName="absolute inset-0 h-full w-full"
            className="relative z-10"
          >
          </BackgroundGradientAnimation>
          
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-800/30 to-slate-900/50 z-10"></div>
          
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 w-full">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <div className="h-px w-20 bg-gradient-to-l from-transparent via-amber-400 to-transparent"></div>
              </div>

              <h1 className="font-space-grotesk text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 leading-[1.05] tracking-tight">
                <span className="block text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">Rent Your</span>
                <span className="block italic mt-3 bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                  Luxury Car
                </span>
              </h1>

              <p className="font-poppins text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light tracking-wide mt-6">
                Experience unparalleled elegance and sophistication
              </p>

              <div className="flex items-center justify-center gap-4 mt-10">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/70"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-red-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Main Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-64 flex-shrink-0 space-y-6">
              <SeatsFilter
                seatOptions={SEAT_OPTIONS}
                selectedSeats={selectedSeats}
                onSeatsChange={handleSeatsChange}
              />
              <ManufacturerFilter
                manufacturers={MANUFACTURERS}
                selectedManufacturer={selectedManufacturer}
                onManufacturerChange={handleManufacturerChange}
              />
            </div>

            {/* Right Content - Car Grid */}
            <div className="flex-1">
              {filteredCars.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCars.map((car) => (
                    <LuxuryCarCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No luxury cars found for the selected filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
