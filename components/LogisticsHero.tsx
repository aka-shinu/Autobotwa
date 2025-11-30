"use client";

import dynamic from "next/dynamic";
import { GLOBE_CONFIG, GLOBE_ARCS } from "@/constants/logistics";
import { LOGISTICS_METRICS } from "@/constants/logistics-metrics";

// Dynamically import World component to avoid SSR issues
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const hindiQuote = {
  text: "हमारा वादा है - आपका सामान सुरक्षित, समय पर, और विश्वसनीय तरीके से पहुंचेगा",
  translation: "Our promise - Your cargo will reach safely, on time, and reliably",
};

export default function LogisticsHero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center bg-black">
      <div className="container mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Content - Metrics and Quote */}
          <div className="lg:text-left py-20 order-2 px-6 lg:order-1 flex flex-col justify-center">
            {/* Hindi Quote */}
            <div className="mb-12">
              <p
                className="text-2xl sm:text-3xl font-semibold text-white mb-4 leading-relaxed"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {hindiQuote.text}
              </p>
              <p
                className="text-gray-400 text-sm italic"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                {hindiQuote.translation}
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-8">
              {LOGISTICS_METRICS.map((metric) => (
                <div key={metric.label} className="text-center lg:text-left">
                  <div
                    className="text-4xl sm:text-5xl font-bold text-white mb-3"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {metric.value}
                  </div>
                  <div
                    className="text-base text-gray-300 font-medium"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Globe Visualization */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] w-full order-1 lg:order-2">
            <div className="absolute inset-0">
              <World data={GLOBE_ARCS} globeConfig={GLOBE_CONFIG} />
            </div>
            {/* Overlay gradient for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
