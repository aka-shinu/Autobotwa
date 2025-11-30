'use client'

import { useState, useCallback } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MapPin, ChevronDown } from 'lucide-react'
import { MEMORIES } from '@/constants/memories'
import { Memory } from '@/types/memories'
import { MemoryStoryStep } from '@/types/memory-story'
import { generateMemorySteps } from '@/lib/memory-story-utils'
import { Highlighter } from '@/components/ui/text_highlter'

interface MemoryStepData {
  memory: Memory
  step: MemoryStoryStep
  globalStepIndex: number
}

// Helper function to get image for a specific step
function getImageForStep(memory: Memory, step: MemoryStoryStep): string {
  if (!memory.images || memory.images.length === 0) {
    return memory.image // Fallback to default image
  }

  // Title step (stepIndex 0) -> images[0]
  if (step.stepType === 'title') {
    return memory.images[0] || memory.image
  }

  // Story part step (stepIndex 1+) -> images[stepIndex] or cycle through
  if (step.stepType === 'story') {
    const imageIndex = step.stepIndex
    if (imageIndex < memory.images.length) {
      return memory.images[imageIndex]
    }
    // If not enough images, cycle through or use last image
    return memory.images[memory.images.length - 1] || memory.image
  }

  // Description step -> last image or first image
  if (step.stepType === 'description') {
    return memory.images[memory.images.length - 1] || memory.images[0] || memory.image
  }

  return memory.image
}

export default function MemoriesStorySection() {
  const [currentStep, setCurrentStep] = useState<MemoryStepData | null>(null)
  const [previousMemoryId, setPreviousMemoryId] = useState<string | null>(null)
  const [previousImage, setPreviousImage] = useState<string | null>(null)

  // Generate all steps for all memories
  const allSteps: MemoryStepData[] = []
  MEMORIES.forEach((memory) => {
    const steps = generateMemorySteps(memory)
    steps.forEach((step) => {
      allSteps.push({
        memory,
        step,
        globalStepIndex: allSteps.length,
      })
    })
  })

  // Handle step enter from react-scrollama - just track current step, no scroll locking
  const onStepEnter = useCallback(({ data }: { data: MemoryStepData }) => {
    setCurrentStep((prev) => {
      // Track previous image for transition
      if (prev) {
        const prevImage = getImageForStep(prev.memory, prev.step)
        setPreviousImage(prevImage)
        
        // Track previous memory for transition when memory changes
        if (prev.memory.id !== data.memory.id) {
          setPreviousMemoryId(prev.memory.id)
          // Clear previous memory after transition completes
          setTimeout(() => {
            setPreviousMemoryId(null)
          }, 800)
        }
        
        // Clear previous image after transition completes
        setTimeout(() => {
          setPreviousImage(null)
        }, 800)
      }
      return data
    })
  }, [])

  // Get current memory and image for sticky background
  const currentMemory = currentStep?.memory || MEMORIES[0]
  const currentImage = currentStep ? getImageForStep(currentStep.memory, currentStep.step) : currentMemory.image
  const previousMemory = previousMemoryId ? MEMORIES.find((m) => m.id === previousMemoryId) : null
  const isNewMemory = previousMemoryId !== null && previousMemoryId !== currentMemory.id
  const isNewImage = previousImage !== null && previousImage !== currentImage

  return (
    <section className="relative w-full memories-story-section" data-memories-section>
      {/* Sticky Full Viewport Background Image */}
      <div className="sticky top-0 w-full h-screen z-[1] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {/* Previous image for crossfade transition (when memory or image changes) */}
          {(previousMemory || previousImage) && (
            <AnimatePresence>
              <motion.div
                key={`prev-${previousMemory?.id || 'image'}-${previousImage || ''}`}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 z-[1]"
              >
                <Image
                  src={previousImage || previousMemory?.image || currentMemory.image}
                  alt={previousMemory?.title || currentMemory.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </motion.div>
            </AnimatePresence>
          )}
          
          {/* Current image with fade in */}
          <motion.div
            key={`current-${currentMemory.id}-${currentImage}`}
            initial={{ opacity: (isNewMemory || isNewImage) ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 z-[2]"
          >
            <Image
              src={currentImage}
              alt={currentMemory.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </motion.div>
          {/* Gradient Overlay - on top of both images */}
          <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          {/* Vignette - on top of both images */}
          <div
            className="absolute inset-0 z-[3]"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          ></div>
        </div>
      </div>

      {/* Scrollama Container - Text overlays that transition on scroll */}
      <div className="relative z-[2]">
        <Scrollama onStepEnter={onStepEnter} offset={0.5}>
          {allSteps.map((stepData) => {
            const { memory, step } = stepData
            const isActive = currentStep?.memory.id === memory.id && currentStep?.step.stepIndex === step.stepIndex

            return (
              <Step key={`${memory.id}-${step.stepIndex}`} data={stepData}>
                <div className="h-screen flex items-center justify-center px-4 md:px-8">
                  <MemoryStepContent
                    step={step}
                    memory={memory}
                    isActive={isActive}
                  />
                </div>
              </Step>
            )
          })}
        </Scrollama>
      </div>
    </section>
  )
}

interface MemoryStepContentProps {
  step: MemoryStoryStep
  memory: Memory
  isActive: boolean
}

interface StoryTextWithHighlightsProps {
  content: string
  memory: Memory
  stepIndex: number
}

function StoryTextWithHighlights({ content, memory, stepIndex }: StoryTextWithHighlightsProps) {
  const highlights = memory.story?.highlights?.filter(h => h.partIndex === stepIndex) || []
  
  if (highlights.length === 0) {
    // Fallback: wrap entire content with underline
    return (
      <Highlighter
        action="underline"
        color="#dc2626"
        strokeWidth={3}
        animationDuration={1200}
        iterations={2}
        padding={8}
        multiline={true}
        isView={true}
      >
        {content}
      </Highlighter>
    )
  }

  // Split content and apply highlights
  const parts: Array<{ text: string; highlight?: typeof highlights[0] }> = []
  
  // Find all highlight positions in the content
  const highlightRanges: Array<{ start: number; end: number; highlight: typeof highlights[0] }> = []
  
  highlights.forEach((highlight) => {
    const searchText = highlight.text.toLowerCase()
    const contentLower = content.toLowerCase()
    let searchIndex = 0
    
    while (searchIndex < content.length) {
      const index = contentLower.indexOf(searchText, searchIndex)
      if (index === -1) break
      
      // Get the actual text from content (preserving case)
      const actualText = content.substring(index, index + highlight.text.length)
      highlightRanges.push({
        start: index,
        end: index + actualText.length,
        highlight
      })
      searchIndex = index + 1
    }
  })
  
  // Sort by start position
  highlightRanges.sort((a, b) => a.start - b.start)
  
  // Remove overlapping ranges (keep first occurrence)
  const nonOverlappingRanges: typeof highlightRanges = []
  highlightRanges.forEach(range => {
    const overlaps = nonOverlappingRanges.some(existing => 
      (range.start < existing.end && range.end > existing.start)
    )
    if (!overlaps) {
      nonOverlappingRanges.push(range)
    }
  })
  
  // Build parts array
  let lastIndex = 0
  nonOverlappingRanges.forEach((range) => {
    // Add text before highlight
    if (range.start > lastIndex) {
      parts.push({ text: content.substring(lastIndex, range.start) })
    }
    // Add highlighted text (preserving original case from content)
    const highlightedText = content.substring(range.start, range.end)
    parts.push({ text: highlightedText, highlight: range.highlight })
    lastIndex = range.end
  })
  
  // Add remaining text
  if (lastIndex < content.length) {
    parts.push({ text: content.substring(lastIndex) })
  }

  // If no parts created, wrap entire content
  if (parts.length === 0) {
    parts.push({ text: content })
  }

  return (
    <>
      {parts.map((part, idx) => {
        if (part.highlight) {
          return (
            <Highlighter
              key={idx}
              action={part.highlight.action}
              color={part.highlight.color || (part.highlight.action === 'highlight' ? '#ef4444' : '#dc2626')}
              strokeWidth={part.highlight.action === 'highlight' ? 2.5 : 3}
              animationDuration={part.highlight.action === 'highlight' ? 1000 : 1200}
              iterations={2}
              padding={part.highlight.action === 'highlight' ? 6 : 8}
              multiline={true}
              isView={true}
            >
              {part.text}
            </Highlighter>
          )
        }
        return <span key={idx}>{part.text}</span>
      })}
    </>
  )
}

function MemoryStepContent({
  step,
  memory,
  isActive,
}: MemoryStepContentProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={`${memory.id}-${step.stepIndex}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="w-full max-w-5xl mx-auto"
        >
          {step.stepType === 'title' && (
            <div className="text-center">
              <motion.h2
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 md:mb-8 drop-shadow-2xl leading-tight px-4"
                style={{ 
                  fontFamily: 'var(--font-playfair)',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}
              >
                <Highlighter
                  action="bracket"
                  color="#dc2626"
                  strokeWidth={3}
                  animationDuration={1200}
                  iterations={1}
                  padding={10}
                  multiline={true}
                  isView={true}
                >
                  {memory.title}
                </Highlighter>
              </motion.h2>

              {memory.location && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center gap-3 text-white/90 mb-8"
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-red-400 flex-shrink-0" />
                  <span
                    className="text-lg md:text-xl lg:text-2xl font-medium"
                    style={{ 
                      fontFamily: 'var(--font-playfair)',
                      letterSpacing: '0.05em',
                      fontStyle: 'italic'
                    }}
                  >
                    {memory.location}
                  </span>
                </motion.div>
              )}

              {memory.story?.parts && memory.story.parts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-col items-center gap-2 mt-12"
                >
                  <span className="text-white/70 text-sm md:text-base uppercase tracking-wider">
                    Scroll to continue
                  </span>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ChevronDown className="w-6 h-6 text-white/60" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          )}

          {step.stepType === 'story' && (
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Text Container - Clean & Professional */}
              <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-xl">
                <p 
                  className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed text-center"
                  style={{ 
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 400,
                    letterSpacing: '0.01em'
                  }}
                >
                  <StoryTextWithHighlights 
                    content={step.content} 
                    memory={memory}
                    stepIndex={step.stepIndex - 1}
                  />
                </p>
              </div>
            </div>
          )}

          {step.stepType === 'description' && (
            <div className="relative w-full max-w-3xl mx-auto">
              {/* Description Container - Clean & Professional */}
              <div className="relative bg-black/45 backdrop-blur-md rounded-xl p-8 md:p-10 lg:p-12 border border-white/10 shadow-xl">
                <p 
                  className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center"
                  style={{ 
                    fontFamily: 'var(--font-playfair)',
                    fontWeight: 400,
                    letterSpacing: '0.01em'
                  }}
                >
                  <Highlighter
                    action="box"
                    color="#ef4444"
                    strokeWidth={2.5}
                    animationDuration={1400}
                    iterations={2}
                    padding={7}
                    multiline={true}
                    isView={true}
                  >
                    {memory.description}
                  </Highlighter>
                </p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

