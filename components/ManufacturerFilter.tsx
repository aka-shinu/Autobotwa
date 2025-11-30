'use client'

import { Manufacturer } from '@/types/luxury-cars'

interface ManufacturerFilterProps {
  manufacturers: Manufacturer[]
  selectedManufacturer: string
  onManufacturerChange: (manufacturerId: string) => void
}

export default function ManufacturerFilter({
  manufacturers,
  selectedManufacturer,
  onManufacturerChange,
}: ManufacturerFilterProps) {
  return (
    <aside className="bg-amber-50 border-r border-amber-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Manufacturers</h2>
      <ul className="space-y-0">
        {manufacturers.map((manufacturer) => {
          const isActive = selectedManufacturer === manufacturer.id
          return (
            <li key={manufacturer.id}>
              <button
                onClick={() => onManufacturerChange(manufacturer.id)}
                className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-100 text-red-600 border-l-4 border-red-600'
                    : 'text-gray-700 hover:bg-amber-100 hover:text-gray-900'
                }`}
              >
                {manufacturer.name}
              </button>
              {manufacturer.id !== manufacturers[manufacturers.length - 1].id && (
                <hr className="border-amber-200 my-0" />
              )}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
















