"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ServiceCard from "./ServiceCard";
import Button from "./Button";
import { Service } from "@/types/services";
import { SERVICES } from "@/constants/services";
import { SERVICES_STATS, SERVICES_FEATURES } from "@/constants/services-stats";
import { servicesSwiperConfig } from "@/constants/swiper-config";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  MapPin,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Highlighter } from "@/components/ui/text_highlter";

const iconMap = {
  Users,
  MapPin,
  Award,
};

interface ServicesSectionProps {
  title?: string;
  description?: string;
  services?: Service[];
}

export default function ServicesSection({
  title = "Our Services",
  description = "We offer comprehensive travel and logistics solutions to make your journey comfortable and hassle-free",
  services = SERVICES,
}: ServicesSectionProps) {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
         <div className="flex flex-col gap-8 lg:gap-12">
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
               {title}
             </h2>
             <p
               className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
               style={{
                 fontFamily: 'var(--font-poppins)',
               }}
             >
               Aapki har <Highlighter
                 action="underline"
                 color="#dc2626"
                 strokeWidth={2}
                 animationDuration={800}
                 iterations={2}
                 padding={2}
                 multiline={false}
                 isView={true}
               >
                 travel need
               </Highlighter> ke liye <Highlighter
                 action="highlight"
                 color="#dc2626"
                 strokeWidth={2}
                 animationDuration={800}
                 iterations={2}
                 padding={2}
                 multiline={false}
                 isView={true}
               >
                <span className="text-white"> complete solution</span>
               </Highlighter>
             </p>
           </div>
           
           <div className="flex flex-col px-4 md:px-6 lg:px-8 space-y-4 w-full">
            {/* <div className="grid w-full grid-cols-3 gap-3 mb-4">
              {SERVICES_STATS.map((stat, idx) => {
                const Icon = iconMap[stat.icon as keyof typeof iconMap];
                return (
                  <div key={idx} className="text-center">
                    <Icon className="w-4 h-4 text-red-600 mx-auto mb-1.5" />
                    <div className="text-xl font-bold text-gray-800 font-space-grotesk">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-poppins">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {SERVICES_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 justify-center"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="text-gray-600 font-poppins text-xs">
                    {f.text}
                  </span>
                </div>
              ))}
            </div> */}
            {/* <Button href="/contact" variant="primary" className="w-fit">Get Started Today</Button> */}
          </div>
           <div className="relative w-full px-4 md:px-6 lg:px-8">
            <Swiper
              {...servicesSwiperConfig}
              className="services-swiper h-full"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <ServiceCard {...service} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-button-prev-services absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hidden lg:flex items-center justify-center">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button className="swiper-button-next-services absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors hidden lg:flex items-center justify-center">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
