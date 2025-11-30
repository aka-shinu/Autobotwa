import { LogisticsStoryChapter } from '@/types/logistics-story'
import { LOGISTICS_SERVICES } from './logistics'

export const LOGISTICS_STORY_CHAPTERS: LogisticsStoryChapter[] = [
  {
    id: 'opening',
    title: 'Every Business Has a Dream',
    description: 'The journey begins with a vision',
    image: '/images/logistics/undraw_logistics_8vri.svg',
    stepType: 'title',
    content: 'Every Business Has a Dream',
    highlights: [
      { text: 'Every Business', action: 'highlight' as const, color: '#ef4444' },
      { text: 'Dream', action: 'bracket' as const, color: '#dc2626' }
    ]
  },
  {
    id: 'problem',
    title: 'The Challenge of Global Commerce',
    description: 'Understanding the pain points',
    image: '/images/logistics/undraw_heavy-box_ofui.svg',
    stepType: 'story',
    content: [
      'In today\'s interconnected world, businesses face the challenge of moving goods across vast distances.',
      'Delays, damaged shipments, and complex customs procedures can turn a promising opportunity into a nightmare.',
      'You need a logistics partner who understands your business, your timeline, and your commitment to excellence.'
    ],
    highlights: [
      { partIndex: 0, text: 'moving goods across vast distances', action: 'underline', color: '#dc2626' },
      { partIndex: 1, text: 'Delays, damaged shipments', action: 'highlight', color: '#ef4444' },
      { partIndex: 2, text: 'logistics partner', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'solution-intro',
    title: 'We Bridge the Gap',
    description: 'Your trusted logistics partner',
    image: '/images/logistics/undraw_deliveries_qutl.svg',
    stepType: 'story',
    content: [
      'At Name Here, we don\'t just move packages—we move possibilities.',
      'From the bustling markets of Mumbai to the tech hubs of Bangalore, from the ports of Chennai to the industrial centers of Delhi, we connect India to the world.',
      'Hamari logistics services se aap apni business ko global reach de sakte hain, bina kisi tension ke.'
    ],
    highlights: [
      { partIndex: 0, text: 'move possibilities', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'connect India to the world', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'global reach', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'service-domestic',
    title: 'Domestic Logistics',
    description: 'Pan-India coverage',
    image: '/images/logistics/undraw_deliveries_qutl.svg',
    stepType: 'service-showcase',
    serviceId: 'domestic',
    content: [
      'Whether you\'re shipping from Delhi to Mumbai or from Kolkata to Chennai, our domestic logistics network ensures your cargo reaches its destination safely and on time.',
      'With same-day and express delivery options, real-time tracking, and secure handling, we make domestic shipping as simple as a local delivery.',
      'Pan-India coverage means aap kisi bhi city se kisi bhi city tak apna cargo safely bhej sakte hain.'
    ],
    highlights: [
      { partIndex: 0, text: 'safely and on time', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'real-time tracking', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'Pan-India coverage', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'service-international',
    title: 'International Logistics',
    description: 'Worldwide shipping',
    image: '/images/logistics/undraw_logistics_8vri.svg',
    stepType: 'service-showcase',
    serviceId: 'international',
    content: [
      'From India to Dubai, Singapore to London, New York to Tokyo—our international logistics network spans the globe.',
      'We handle customs clearance, documentation, and multi-modal transport so you don\'t have to worry about the complexities of cross-border shipping.',
      'Worldwide shipping means aap duniya ke kisi bhi corner mein apna cargo deliver kar sakte hain.'
    ],
    highlights: [
      { partIndex: 0, text: 'spans the globe', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'customs clearance', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'Worldwide shipping', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'service-heavy-cargo',
    title: 'Heavy Cargo Transport',
    description: 'Specialized handling',
    image: '/images/logistics/undraw_heavy-box_ofui.svg',
    stepType: 'service-showcase',
    serviceId: 'heavy-cargo',
    content: [
      'Industrial equipment, machinery, and oversized cargo require specialized handling and expertise.',
      'Our heavy cargo transport services ensure that even the most challenging shipments are handled with care, precision, and the right equipment.',
      'Heavy machinery se lekar oversized cargo tak—hum sab kuch safely transport karte hain.'
    ],
    highlights: [
      { partIndex: 0, text: 'specialized handling', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'care, precision', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'safely transport', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'service-import-export',
    title: 'Import & Export',
    description: 'Complete trade solutions',
    image: '/images/logistics/undraw_logistics_8vri.svg',
    stepType: 'service-showcase',
    serviceId: 'import-export',
    content: [
      'Navigating import-export regulations can be complex, but it doesn\'t have to be.',
      'Our complete import-export services include customs clearance, documentation support, trade compliance, and port handling—all managed by experts who understand international trade.',
      'Customs clearance se lekar documentation tak—hum sab kuch handle karte hain, taaki aap apni business pe focus kar saken.'
    ],
    highlights: [
      { partIndex: 0, text: 'import-export regulations', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'experts who understand', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'apni business pe focus', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'coverage',
    title: 'From India to the World',
    description: 'Global reach, local expertise',
    image: '/images/logistics/undraw_logistics_8vri.svg',
    stepType: 'coverage',
    content: [
      'Our network extends across India—from the northern plains to the southern coasts, from the eastern ports to the western industrial hubs.',
      'And beyond India, we connect you to over 50 countries worldwide, from the Middle East to Southeast Asia, from Europe to the Americas.',
      'Pan-India coverage aur worldwide shipping—yeh hai hamari strength. Aapki business ko global reach dene ke liye hum hamesha ready hain.'
    ],
    highlights: [
      { partIndex: 0, text: 'across India', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'over 50 countries', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'global reach', action: 'box', color: '#dc2626' }
    ]
  },
  {
    id: 'success',
    title: 'Your Success is Our Mission',
    description: 'Building lasting partnerships',
    image: '/images/logistics/undraw_deliveries_qutl.svg',
    stepType: 'cta',
    content: [
      'At Name Here, we believe that your success is our success.',
      'We\'re not just a logistics provider—we\'re your partner in growth, helping you reach new markets, serve new customers, and achieve your business goals.',
      'Aapki business ko grow karne mein hum aapki help karte hain. Reliable logistics solutions se aap apni operations ko smoothly run kar sakte hain.',
      'Let\'s build something great together. Get in touch today and discover how we can help your business reach new heights.'
    ],
    highlights: [
      { partIndex: 0, text: 'your success is our success', action: 'highlight', color: '#ef4444' },
      { partIndex: 1, text: 'partner in growth', action: 'underline', color: '#dc2626' },
      { partIndex: 2, text: 'Reliable logistics solutions', action: 'box', color: '#dc2626' },
      { partIndex: 3, text: 'build something great together', action: 'highlight', color: '#ef4444' }
    ]
  }
]

