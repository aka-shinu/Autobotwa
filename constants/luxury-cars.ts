import { LuxuryCar, Manufacturer } from '@/types/luxury-cars'

export const MANUFACTURERS: Manufacturer[] = [
  { id: 'all', name: 'All Manufacturers' },
  { id: 'mercedes-benz', name: 'Mercedes-Benz' },
  { id: 'bmw', name: 'BMW' },
  { id: 'audi', name: 'Audi' },
  { id: 'jaguar', name: 'Jaguar' },
  { id: 'land-rover', name: 'Land Rover' },
  { id: 'volvo', name: 'Volvo' },
  { id: 'lexus', name: 'Lexus' },
  { id: 'skoda', name: 'Skoda' },
  { id: 'toyota', name: 'Toyota' }, // Camry / Fortuner (premium)
  { id: 'hyundai', name: 'Hyundai' }, // Tucson (premium)
];


export const LUXURY_CARS: LuxuryCar[] = [
  {
    id: 'mercedes-c200-2019',
    manufacturer: 'Mercedes-Benz',
    model: 'C-Class C200',
    year: 2019,
    fuelType: 'Petrol',
    kilometers: 42000,
    registrationState: 'MH',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=mercedes-benz&modelFamily=c-class&modelYear=2019&angle=23&zoomType=fullscreen',
    description: 'Comfortable and refined executive sedan with premium interior.',
    singleOwner: false,
    seats: 5,
  },
  {
    id: 'bmw-320d-2020',
    manufacturer: 'BMW',
    model: '3 Series 320d Luxury Line',
    year: 2020,
    fuelType: 'Diesel',
    kilometers: 35000,
    registrationState: 'DL',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=bmw&modelFamily=3-series&modelYear=2020&angle=23&zoomType=fullscreen',
    description: 'Reliable luxury sedan known for great handling and comfort.',
    singleOwner: true,
    seats: 5,
  },
  {
    id: 'audi-a4-2019',
    manufacturer: 'Audi',
    model: 'A4 30 TFSI Premium Plus',
    year: 2019,
    fuelType: 'Petrol',
    kilometers: 50000,
    registrationState: 'KA',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=audi&modelFamily=a4&modelYear=2019&angle=23&zoomType=fullscreen',
    description: 'Elegant mid-size sedan with a quiet cabin and smooth drive.',
    singleOwner: false,
    seats: 5,
  },
  {
    id: 'toyota-camry-2018',
    manufacturer: 'Toyota',
    model: 'Camry Hybrid',
    year: 2018,
    fuelType: 'Hybrid',
    kilometers: 60000,
    registrationState: 'GJ',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=toyota&modelFamily=camry&modelYear=2018&angle=23&zoomType=fullscreen',
    description: 'Premium hybrid sedan with superb mileage and comfort.',
    singleOwner: false,
    seats: 5,
  },
  {
    id: 'skoda-superb-2020',
    manufacturer: 'Skoda',
    model: 'Superb L&K',
    year: 2020,
    fuelType: 'Petrol',
    kilometers: 30000,
    registrationState: 'HR',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=skoda&modelFamily=superb&modelYear=2020&angle=23&zoomType=fullscreen',
    description: 'Spacious and luxurious sedan known for comfort and build quality.',
    singleOwner: true,
    seats: 5,
  },
  {
    id: 'volvo-xc40-2021',
    manufacturer: 'Volvo',
    model: 'XC40 T4 R-Design',
    year: 2021,
    fuelType: 'Petrol',
    kilometers: 22000,
    registrationState: 'MH',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=volvo&modelFamily=xc40&modelYear=2021&angle=23&zoomType=fullscreen',
    description: 'Compact luxury SUV with top-tier safety features and comfort.',
    singleOwner: true,
    seats: 5,
  },
  {
    id: 'hyundai-tucson-2020',
    manufacturer: 'Hyundai',
    model: 'Tucson GLS',
    year: 2020,
    fuelType: 'Diesel',
    kilometers: 38000,
    registrationState: 'UP',
    image:
      'https://cdn.imagin.studio/getImage?customer=img&make=hyundai&modelFamily=tucson&modelYear=2020&angle=23&zoomType=fullscreen',
    description: 'Premium crossover SUV with a smooth ride and modern interiors.',
    singleOwner: false,
    seats: 5,
  },
]

export const SEAT_OPTIONS = [
  { id: 'all', label: 'All Seats', value: null },
  { id: '4', label: '4 Seats', value: 4 },
  { id: '5', label: '5 Seats', value: 5 },
  { id: '6', label: '6 Seats', value: 6 },
  { id: '7', label: '7 Seats', value: 7 },
  { id: '8', label: '8+ Seats', value: 8 },
]

