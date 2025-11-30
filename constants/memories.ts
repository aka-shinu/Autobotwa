import { Memory } from '@/types/memories'

export const MEMORIES: Memory[] = [
  {
    id: 'family-trip',
    image: '/images/hero/trips/family_pic.jpg', // Fallback image
    images: [
      '/images/hero/trips/family_pic.jpg', // Title image (step 0)
      '/images/hero/trips/family_pic.jpg', // Story part 1 image (step 1) - Replace with your image
      '/images/hero/trips/mother_son.jpg', // Story part 2 image (step 2) - Replace with your image
      '/images/hero/trips/family.jpg', // Story part 3 image (step 3) - Replace with your image
      '/images/hero/trips/father_son.jpg', // Story part 4 image (step 4) - Replace with your image
      '/images/hero/trips/family_pic.jpg', // Description image (step 5) - Replace with your image
    ],
    title: 'Family Moments',
    description: 'Creating beautiful memories with your loved ones on the road, making every journey special and memorable.',
    location: 'Family Trip',
    category: 'trip',
    story: {
      parts: [
        'Laughter fills the car as you embark on a journey together',
        'Every stop becomes a photo opportunity, every moment a memory to cherish on the road where family stories are painted',
        'Plan your perfect family trip anywhere in India with our comfortable car rental services',
        'Our pan-India car rental network ensures you can create beautiful family memories from any city across India'
      ],
      highlights: [
        { partIndex: 0, text: 'Laughter fills', action: 'highlight', color: '#ef4444' },
        { partIndex: 0, text: 'journey together', action: 'underline', color: '#dc2626' },
        { partIndex: 1, text: 'family stories', action: 'highlight', color: '#ef4444' },
        { partIndex: 1, text: 'memory to cherish', action: 'underline', color: '#dc2626' },
        { partIndex: 2, text: 'anywhere in India', action: 'highlight', color: '#ef4444' },
        { partIndex: 2, text: 'car rental services', action: 'underline', color: '#dc2626' },
        { partIndex: 3, text: 'pan-India car rental network', action: 'highlight', color: '#ef4444' },
        { partIndex: 3, text: 'any city across India', action: 'underline', color: '#dc2626' }
      ]
    }
  },

 
]

