'use client'

import { WHY_CHOOSE_US_FEATURES } from '@/constants/why-choose-us'
import {
  ShieldCheck,
  MapPin,
  Car,
  Clock,
  Calendar,
  Sparkles,
  DollarSign,
  Package,
  LucideIcon,
} from 'lucide-react'
import { Highlighter } from '@/components/ui/text_highlter'

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  MapPin,
  Car,
  Clock,
  Calendar,
  Sparkles,
  DollarSign,
  Package,
}

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white relative z-[2] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="text-center px-4">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              style={{
                fontFamily: 'var(--font-playfair)',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Why Choose <Highlighter
                action="highlight"
                color="#dc2626"
                strokeWidth={2}
                animationDuration={800}
                iterations={2}
                padding={4}
                multiline={false}
                isView={true}
              >
                <span className='text-white'>
                Yadav Tours

                </span>
              </Highlighter>?
            </h2>
            <p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              style={{
                fontFamily: 'var(--font-poppins)',
              }}
            >
              Travel with <Highlighter
                action="underline"
                color="#dc2626"
                strokeWidth={2}
                animationDuration={800}
                iterations={2}
                padding={2}
                multiline={false}
                isView={true}
              >
                Trust
              </Highlighter>. Travel with Yadav Tours.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-6 lg:px-8">
            {WHY_CHOOSE_US_FEATURES.map((feature) => {
              const Icon = iconMap[feature.icon]
              return (
                <div
                  key={feature.id}
                  className="group flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <Icon
                      className="w-14 h-14 text-gray-400 group-hover:text-red-600 transition-colors duration-300 mx-auto"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base md:text-lg font-bold text-gray-900 mb-3"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base text-gray-600 leading-relaxed"
                    style={{
                      fontFamily: 'var(--font-poppins)',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

