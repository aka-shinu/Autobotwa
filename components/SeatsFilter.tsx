'use client'

interface SeatOption {
  id: string
  label: string
  value: number | null
}

interface SeatsFilterProps {
  seatOptions: SeatOption[]
  selectedSeats: number | null
  onSeatsChange: (seats: number | null) => void
}

export default function SeatsFilter({
  seatOptions,
  selectedSeats,
  onSeatsChange,
}: SeatsFilterProps) {
  return (
    <div className="bg-amber-50 border-r border-amber-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Seats</h2>
      <ul className="space-y-0">
        {seatOptions.map((option) => {
          const isActive = selectedSeats === option.value
          return (
            <li key={option.id}>
              <button
                onClick={() => onSeatsChange(option.value)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-100 text-red-600 border-l-4 border-red-600'
                    : 'text-gray-700 hover:bg-amber-100 hover:text-gray-900'
                }`}
              >
                {option.label}
              </button>
              {option.id !== seatOptions[seatOptions.length - 1].id && (
                <hr className="border-amber-200 my-0" />
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
















