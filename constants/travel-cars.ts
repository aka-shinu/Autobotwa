import { TravelCar } from '@/types/travel-cars'
const path = '/images/hero/cars/'
export const TRAVEL_CARS: TravelCar[] = [
  // 1. Toyota Fortuner Legender
  {
    id: 'toyota-fortuner-legender',
    manufacturer: 'Toyota',
    model: 'Fortuner Legender',
    year: 2023,
    fuelType: 'Diesel',
    seats: 7,
    image: path + '1.jpg',
    description:
      'Premium 7-seater Fortuner Legender perfect for luxury travel, weddings and VIP movement.',
    priceRange: '₹6,000 - ₹9,000/day',
  },

  // 2. Audi A3 Cabriolet (red)
  {
    id: 'audi-a3-cabriolet',
    manufacturer: 'Audi',
    model: 'A3 Cabriolet',
    year: 2018,
    fuelType: 'Petrol',
    seats: 4,
    image: path + '2.jpg',
    description:
      'Stylish red convertible ideal for weddings, photo shoots, and premium travel.',
    priceRange: '₹10,000 - ₹18,000/day',
  },

  // 3. Toyota Fortuner (Standard)
  {
    id: 'toyota-fortuner-standard',
    manufacturer: 'Toyota',
    model: 'Fortuner',
    year: 2022,
    fuelType: 'Diesel',
    seats: 7,
    image: path + '3.jpg',
    description:
      'The reliable and powerful Toyota Fortuner suitable for long-distance, family and corporate travel.',
    priceRange: '₹5,500 - ₹8,000/day',
  },

  // 4. Toyota Innova Crysta (Unit 1)
  {
    id: 'toyota-innova-crysta-1',
    manufacturer: 'Toyota',
    model: 'Innova Crysta',
    year: 2022,
    fuelType: 'Diesel',
    seats: 7,
    image: path + '4.jpg',
    description:
      'Spacious and comfortable Innova Crysta ideal for outstation trips and family travel.',
    priceRange: '₹3,500 - ₹5,000/day',
  },

  // 5. Toyota Innova Crysta (Unit 2)
  {
    id: 'toyota-innova-crysta-2',
    manufacturer: 'Toyota',
    model: 'Innova Crysta',
    year: 2023,
    fuelType: 'Diesel',
    seats: 7,
    image: path + '5.jpg',
    description:
      'Another premium Innova Crysta variant with excellent comfort for corporate and family rides.',
    priceRange: '₹3,500 - ₹5,000/day',
  },

  // 6. Kia Sonet
  {
    id: 'kia-sonet',
    manufacturer: 'Kia',
    model: 'Sonet',
    year: 2023,
    fuelType: 'Petrol',
    seats: 5,
    image: path + '6.jpg',
    description:
      'Compact and stylish 5-seater SUV, perfect for decorated wedding rides and city travel.',
    priceRange: '₹2,500 - ₹3,500/day',
  },
  {
    id: 'tata-luxury-coach-grey',
    manufacturer: 'Tata',
    model: 'Tata AC Luxury Coach',
    year: 2024,
    fuelType: 'Diesel',
    seats: 41, // adjust if exact seat count known
    image: path + 'bus1.jpg',
    description:
      'Premium full-size Tata luxury coach with comfortable pushback seats, ideal for school trips, corporate travel, and long-distance group tours.',
    priceRange: '₹18,000 - ₹28,000/day',
  },

  // 2. White Volvo Multi Axle Coach
  {
    id: 'volvo-b8r-multi-axle',
    manufacturer: 'Volvo',
    model: 'Volvo B8R Multi-Axle 9400',
    year: 2023,
    fuelType: 'Diesel',
    seats: 43, // can modify
    image: path + 'buss.jpg',
    description:
      'High-end Volvo B8R multi-axle luxury coach designed for ultra-smooth long-distance travel. Best for tourism, corporate trips and outstation tours.',
    priceRange: '₹22,000 - ₹32,000/day',
  },

  // 3. Black & Silver Tata Coach
  {
    id: 'tata-luxury-coach-black',
    manufacturer: 'Tata',
    model: 'Tata Magna Premium Coach',
    year: 2024,
    fuelType: 'Diesel',
    seats: 40,
    image: path + 'bus3.jpg',
    description:
      'Stylish black-silver premium coach with luxury interiors, suitable for weddings, events and outstation group travel.',
    priceRange: '₹17,000 - ₹27,000/day',
  },
];



export const SEAT_GROUPS = [
  {id: "0", label: "All", value: 0},
  { id: '4', label: '4 Seats', value: 4 },
  { id: '7', label: '7 Seats', value: 7 },
  { id: '6', label: '6 Seats', value: 6 },
  { id: '8+', label: '8+ Seats', value: 8 },
]











