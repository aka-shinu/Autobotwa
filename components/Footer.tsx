'use client'

import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'

// Business location configuration
// Option 1: Use coordinates (recommended - most accurate)
const BUSINESS_LAT = 28.5794754  // Replace with your latitude
const BUSINESS_LNG = 77.0833571  // Replace with your longitude

// Option 2: Use a Google Maps embed URL (get from Google Maps: Share > Embed a map)
// If you have the embed URL, replace the getMapEmbedUrl function to return that URL directly
// const GOOGLE_MAPS_EMBED_URL = 'YOUR_EMBED_URL_HERE'

// Generate Google Maps embed URL using coordinates
const getMapEmbedUrl = () => {
  // Using coordinates - this creates a map centered on your location
  return `https://www.google.com/maps?q=${BUSINESS_LAT},${BUSINESS_LNG}&hl=en&z=15&output=embed`
  
  // Alternative: If you have a Google Maps Place ID or want to use the full embed URL format,
  // you can get it from Google Maps: 
  // 1. Go to Google Maps
  // 2. Search for your business location
  // 3. Click "Share" → "Embed a map"
  // 4. Copy the iframe src URL and use it directly
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { href: '/services/car-rental', label: 'Car Rental' },
    { href: '/services/luxury-cars', label: 'Luxury Cars' },
    { href: '/services/logistics', label: 'Logistics' },
  ]

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/services', label: 'Services' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <h3 
                className="text-xl font-bold text-white"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Name Here
              </h3>
            </Link>
            <p 
              className="text-gray-400 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Premium car rental, luxury vehicles, and logistics services across India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 
              className="text-white font-semibold text-base mb-4"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-white font-semibold text-base mb-4"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-white font-semibold text-base mb-4"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:18002093344"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span style={{ fontFamily: 'var(--font-poppins)' }}>1800 209 3344</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yadavtourstravel.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span 
                    className="break-all"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    info@yadavtourstravel.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <h3 
            className="text-white font-semibold text-base mb-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Find Us
          </h3>
          <div className="w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden border border-gray-800">
            <iframe
              src={getMapEmbedUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              onClick={() => {
                window.open(getMapEmbedUrl(), '_blank')
              }}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p 
              className="text-gray-500 text-sm text-center sm:text-left"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              © {currentYear} Name Here. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link 
                href="/about" 
                className="text-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/about" 
                className="text-gray-500 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
