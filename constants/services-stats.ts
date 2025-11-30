export interface Stat {
  value: string
  label: string
  icon: string
}

export interface Feature {
  text: string
}

export const SERVICES_STATS: Stat[] = [
  {
    value: '10K+',
    label: 'Happy Customers',
    icon: 'Users'
  },
  {
    value: '50+',
    label: 'Cities Covered',
    icon: 'MapPin'
  },
  {
    value: '15+',
    label: 'Years Experience',
    icon: 'Award'
  }
]

export const SERVICES_FEATURES: Feature[] = [
  { text: '24/7 Customer Support' },
  { text: 'Trusted & Reliable' },
  { text: 'Pan-India Coverage' }
]

























