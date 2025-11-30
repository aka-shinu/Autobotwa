export interface Memory {
  id: string
  image: string // Fallback/default image
  images?: string[] // Array of images for different story parts (images[0] = title, images[1-N] = story parts)
  title: string
  description: string
  location?: string
  category?: 'tourist_spot' | 'trip' | 'luxury'
  story?: {
    parts: string[]
    highlights?: Array<{
      partIndex: number
      text: string
      action: 'highlight' | 'underline'
      color?: string
    }>
  }
}

