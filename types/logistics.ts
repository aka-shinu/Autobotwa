export interface LogisticsService {
  id: string
  title: string
  description: string
  icon: string // SVG path
  features: string[]
  transportModes: ('Air' | 'Sea' | 'Road')[]
}

export interface CoverageRegion {
  id: string
  name: string
  type: 'domestic' | 'international'
  cities?: string[]
  countries?: string[]
  description?: string
}

export interface GlobeArcData {
  order: number
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  arcAlt: number
  color: string
}

export interface LogisticsFeature {
  id: string
  title: string
  description: string
  icon?: string
}

export interface GlobeConfig {
  pointSize?: number
  globeColor?: string
  showAtmosphere?: boolean
  atmosphereColor?: string
  atmosphereAltitude?: number
  emissive?: string
  emissiveIntensity?: number
  shininess?: number
  polygonColor?: string
  ambientLight?: string
  directionalLeftLight?: string
  directionalTopLight?: string
  pointLight?: string
  arcTime?: number
  arcLength?: number
  rings?: number
  maxRings?: number
  initialPosition?: {
    lat: number
    lng: number
  }
  autoRotate?: boolean
  autoRotateSpeed?: number
}














