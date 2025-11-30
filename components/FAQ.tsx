'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { FAQ } from '@/types/faq'

interface FAQProps {
  faqs: FAQ[]
  title?: string
  className?: string
}

export default function FAQ({ faqs, title = 'Frequently Asked Questions', className = '' }: FAQProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className={className}>
      <div className="space-y-4">
        {title && (
          <h2 
            className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {title}
          </h2>
        )}
        <div className="space-y-2">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                className="w-full py-4 flex items-center justify-between text-left hover:text-red-600 transition-colors"
              >
                <span 
                  className="text-gray-900 text-base font-medium pr-4"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {faq.question}
                </span>
                {openFaq === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openFaq === faq.id && (
                <div className="pb-4">
                  <p 
                    className="text-gray-600 text-sm leading-relaxed"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}











