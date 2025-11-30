'use client'

import { StickyScroll } from '@/components/ui/sticky_scroll_reveal'
import Image from 'next/image'
import Link from 'next/link'
import { Package, Globe, Truck, FileText, MapPin, Clock, Shield, CheckCircle2, ArrowRight, Building2 } from 'lucide-react'
import { LOGISTICS_SERVICES, LOGISTICS_FEATURES, INDIA_COVERAGE, INTERNATIONAL_COVERAGE } from '@/constants/logistics'

const logisticsContent = [
  {
    title: 'Global Logistics Solutions',
    description: 'From India to the world—comprehensive logistics services that connect your business globally. We provide reliable, efficient, and cost-effective solutions for all your shipping needs, whether domestic or international.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48">
            <Image
              src="/images/logistics/undraw_logistics_8vri.svg"
              alt="Global Logistics"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">50+ Countries</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Pan-India</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">24/7 Support</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Domestic Logistics',
    description: 'Comprehensive logistics solutions within India. Pan-India coverage with reliable and timely delivery. From Delhi to Mumbai, Bangalore to Chennai, we ensure your cargo reaches safely and on time with same-day and express delivery options.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48">
            <Image
              src="/images/logistics/undraw_deliveries_qutl.svg"
              alt="Domestic Logistics"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Pan-India</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Real-time Tracking</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Express Delivery</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'International Logistics',
    description: 'Global shipping from India to anywhere in the world. Reliable cross-border logistics solutions with customs clearance, documentation support, and multi-modal transport options. Ship to 50+ countries with confidence.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48">
            <Image
              src="/images/logistics/undraw_logistics_8vri.svg"
              alt="International Logistics"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Worldwide</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Customs Clearance</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Multi-Modal</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Heavy Cargo Transport',
    description: 'Specialized handling for heavy and oversized cargo. Industrial equipment and machinery transport with the right equipment and expertise to handle even the most challenging shipments. From construction equipment to manufacturing machinery.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48">
            <Image
              src="/images/logistics/undraw_heavy-box_ofui.svg"
              alt="Heavy Cargo Transport"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Specialized</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Industrial</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Oversized</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Import & Export Services',
    description: 'Complete import-export logistics services with customs clearance and documentation assistance. Expert support for international trade compliance, port handling, and seamless cross-border transactions.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-48 h-48">
            <Image
              src="/images/logistics/undraw_logistics_8vri.svg"
              alt="Import & Export"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Customs</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Documentation</span>
            <span className="px-3 py-1 bg-red-100 rounded-full text-red-700 text-sm font-semibold">Compliance</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Pan-India Coverage',
    description: 'Comprehensive logistics services across all major cities and industrial hubs in India. From North to South, East to West—we cover Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, and many more cities.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-3 w-full">
          {INDIA_COVERAGE.map((region) => (
            <div key={region.id} className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
              <MapPin className="w-6 h-6 text-red-600" />
              <span className="text-gray-900 text-xs font-semibold text-center">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'International Coverage',
    description: 'Ship from India to anywhere in the world. Our network extends to Middle East, Southeast Asia, Europe, Americas, and Asia Pacific regions. Reliable logistics to 50+ countries worldwide.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-3 w-full">
          {INTERNATIONAL_COVERAGE.map((region) => (
            <div key={region.id} className="flex flex-col items-center gap-2 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Globe className="w-6 h-6 text-red-600" />
              <span className="text-gray-900 text-xs font-semibold text-center">{region.name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Why Choose Us?',
    description: 'Indian company with global reach. Pan-India coverage, worldwide shipping, real-time tracking, and multi-modal transport options. We make logistics simple, reliable, and cost-effective for businesses of all sizes.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <Globe className="w-8 h-8 text-red-600" />
            <span className="text-gray-900 text-sm font-semibold text-center">50+ Countries</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <MapPin className="w-8 h-8 text-red-600" />
            <span className="text-gray-900 text-sm font-semibold text-center">Pan-India</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <Clock className="w-8 h-8 text-red-600" />
            <span className="text-gray-900 text-sm font-semibold text-center">24/7 Support</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
            <Shield className="w-8 h-8 text-red-600" />
            <span className="text-gray-900 text-sm font-semibold text-center">Secure</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Industries We Serve',
    description: 'Our logistics services cater to various industries across India and globally. From manufacturing and e-commerce to healthcare, pharmaceuticals, automotive, textiles, and more—we serve businesses across all sectors.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-3 w-full">
          {['Manufacturing', 'E-commerce', 'Healthcare', 'Pharmaceuticals', 'Automotive', 'Textiles', 'Retail', 'Construction', 'Electronics'].map((industry) => (
            <div key={industry} className="flex flex-col items-center gap-1 p-2 bg-white rounded-lg border border-gray-200 shadow-sm">
              <Building2 className="w-5 h-5 text-red-600" />
              <span className="text-gray-900 text-xs font-semibold text-center">{industry}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Partner With Us',
    description: 'Building long-term partnerships is at the core of our business. We work closely with our clients to understand their unique logistics requirements and provide customized solutions that drive efficiency and growth. Aapki business ko grow karne mein hum aapki help karte hain.',
    content: (
      <div className="flex h-full w-full items-center justify-center p-8">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
            <p className="text-gray-700 text-sm mb-6">Get a logistics quote today</p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2 shadow-lg"
          >
            Get Logistics Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    ),
  },
]

export default function LogisticsStickyScroll() {
  return (
    <section className="min-h-screen  bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container">
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <StickyScroll 
            content={logisticsContent}
            contentClassName="bg-gradient-to-br from-red-50 to-red-100"
          />
        </div>
      </div>
    </section>
  )
}

