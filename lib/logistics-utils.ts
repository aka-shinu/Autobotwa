import { GlobeArcData } from '@/types/logistics'

/**
 * Generate random arc color from brand colors
 */
export function getRandomArcColor(): string {
  const colors = ['#dc2626', '#ef4444', '#fbbf24', '#dc2626', '#ef4444']
  return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * Format transport modes for display
 */
export function formatTransportModes(modes: string[]): string {
  return modes.join(', ')
}

/**
 * Check if a region is domestic
 */
export function isDomesticRegion(type: 'domestic' | 'international'): boolean {
  return type === 'domestic'
}

/**
 * Get region cities or countries for display
 */
export function getRegionLocations(
  cities?: string[],
  countries?: string[]
): string[] {
  return cities || countries || []
}














