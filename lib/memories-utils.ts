import { Memory } from '@/types/memories'

/**
 * Normalizes image path to ensure consistent formatting
 */
export function normalizeImagePath(path: string): string {
  if (!path) return ''
  // Remove leading slash if present and add it back for consistency
  return path.startsWith('/') ? path : `/${path}`
}

/**
 * Gets memories by category
 */
export function getMemoriesByCategory(
  memories: Memory[],
  category: Memory['category']
): Memory[] {
  if (!category) return memories
  return memories.filter((memory) => memory.category === category)
}

/**
 * Gets a random selection of memories
 */
export function getRandomMemories(
  memories: Memory[],
  count: number
): Memory[] {
  const shuffled = [...memories].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

/**
 * Formats location string for display
 */
export function formatLocation(location?: string): string {
  if (!location) return ''
  return location
}
























