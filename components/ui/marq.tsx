"use client"

import { MapPin, Plane, Compass } from "lucide-react"

interface MarqueeProps {
  texts?: string[]
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  texts = [
    "Luxury Getaways",
    "Adventure Tours",
    "Beach Escapes",
    "Mountain Expeditions",
    "Cultural Experiences",
    "Wildlife Safaris",
  ],
  speed = "normal",
}: MarqueeProps) {
  const speedClass = {
    slow: "duration-20",
    normal: "duration-15",
    fast: "duration-10",
  }[speed]

  const icons = [MapPin, Plane, Compass]

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-black to-black py-6 md:py-4">
      <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-lg shadow-red-600/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-lg shadow-red-600/50" />

      {/* Background accent grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[length:50px_100%] pointer-events-none" />

      <div
        className="flex animate-marquee whitespace-nowrap items-center"
        style={{
          animationDuration: `${speed === "slow" ? 50 : speed === "fast" ? 25 : 35}s`,
        }}
      >
        {texts.map((text, idx) => {
          const IconComponent = icons[idx % 3]
          return (
            <div
              key={`first-${idx}`}
              className="flex items-center shrink-0 group px-3 cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div className="relative mr-3 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150" />
                <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-all duration-300 scale-125 animate-pulse" />
                <IconComponent className="relative w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-300 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              </div>

              <span className="text-xs font-bold tracking-widest uppercase text-white/90 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.4)] whitespace-nowrap">
                {text}
              </span>

              <span className="mx-6 md:mx-8 text-red-600/70 group-hover:text-red-500 text-base font-light transition-all duration-300 group-hover:scale-125">
                ·
              </span>
            </div>
          )
        })}

        {texts.map((text, idx) => {
          const IconComponent = icons[idx % 3]
          return (
            <div
              key={`second-${idx}`}
              className="flex items-center shrink-0 group px-3 cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div className="relative mr-3 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-red-600 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-150" />
                <div className="absolute inset-0 bg-red-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-all duration-300 scale-125 animate-pulse" />
                <IconComponent className="relative w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover:text-red-300 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
              </div>

              <span className="text-xs font-bold tracking-widest uppercase text-white/90 group-hover:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.4)] whitespace-nowrap">
                {text}
              </span>

              <span className="mx-6 md:mx-8 text-red-600/70 group-hover:text-red-500 text-base font-light transition-all duration-300 group-hover:scale-125">
                ·
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
