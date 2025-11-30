import { Service } from '@/types/services'
export const markers = [
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
  }, // New York
  {
    lat: 34.0522,
    lng: -118.2437,
    size: 0.3,
  }, // Los Angeles
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.3,
  }, // London
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.3,
  }, // Sydney
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.3,
  }, // Paris
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.3,
  }, // Tokyo
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.3,
  }, // Moscow
  {
    lat: 39.9042,
    lng: 116.4074,
    size: 0.3,
  }, // Beijing
  {
    lat: 28.6139,
    lng: 77.209,
    size: 0.3,
  }, // New Delhi
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.3,
  }, // São Paulo
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
  }, // Singapore
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 0.3,
  }, // Dubai
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.3,
  }, // Berlin
  {
    lat: 19.4326,
    lng: -99.1332,
    size: 0.3,
  }, // Mexico City
  {
    lat: -26.2041,
    lng: 28.0473,
    size: 0.3,
  }, // Johannesburg
]

export const SERVICES: Service[] = [
  {
    title: 'Car Rental Services',
    description: 'Explore India at your own pace with our reliable car rental services. Available across all major cities and tourist destinations.',
    features: [
      'Available pan-India',
      'Well-maintained vehicles',
      'Flexible rental options',
      '24/7 customer support'
    ],
    href: '/services/car-rental',
    image: '/images/hero/trips/family_pic.jpg'
  },
  {
    title: 'Luxury Cars on Rent',
    description: 'Travel in style with our premium collection of luxury cars. Perfect for special occasions, business travel, or simply enjoying the best.',
    features: [
      'Premium luxury vehicles',
      'Experienced chauffeurs',
      'Best-in-class comfort',
      'Corporate packages available'
    ],
    href: '/services/luxury-cars',
    image: '/images/hero/luxury/luxry_car_audi.jpg'
  },
  {
    title: 'Logistics Services',
    description: 'Comprehensive logistics solutions for your business needs. Safe, timely, and efficient transportation across India.',
    features: [
      'Pan-India coverage',
      'Safe & secure transport',
      'Timely deliveries',
      'Corporate solutions'
    ],
    href: '/services/logistics',
    image: '/images/hero/luxury/luxury_bus_view.jpg'
  },
]

