'use client'

import Image from 'next/image'
import { Memory } from '@/types/memories'
import { formatLocation } from '@/lib/memories-utils'
import { motion, AnimatePresence } from 'framer-motion'
import { slideFadeVariants } from '@/lib/animations'
import { MapPin } from 'lucide-react'
import { Scrollama, Step } from 'react-scrollama'
import { useState, useEffect } from 'react'

interface MemorySlideProps {
  memory: Memory
  isActive?: boolean
}

export default function MemorySlide({ memory, isActive = false }: MemorySlideProps) {
  const [activeStoryStep, setActiveStoryStep] = useState(0)
  const storyParts = memory.story?.parts || []

  const onStepEnter = ({ data }: { data: number }) => {
    setActiveStoryStep(data)
  }

  // Reset story step when memory changes
  useEffect(() => {
    if (isActive) {
      setActiveStoryStep(0)
    }
  }, [memory.id, isActive])

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden"
      variants={slideFadeVariants}
      initial="initial"
      animate={isActive ? 'animate' : 'initial'}
    >
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full">
        <Image
          src={memory.image}
          alt={memory.title}
          fill
          priority={isActive}
          className="object-cover w-full h-full transition-transform duration-700 ease-out"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            filter: 'brightness(0.85) contrast(1.1) saturate(1.15)',
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

        {/* Vignette Effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        ></div>

        {/* Storytelling Overlay - appears when scrolling */}
        {isActive && storyParts.length > 0 && (
          <div className="absolute inset-0 z-20 pointer-events-none">
            <Scrollama
              onStepEnter={onStepEnter}
              offset={0.5}
              debug={false}
            >
              {storyParts.map((part, index) => (
                <Step key={index} data={index}>
                  <div className="min-h-[100vh] flex items-center justify-center px-4">
                    <AnimatePresence mode="wait">
                      {activeStoryStep === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -30, scale: 0.95 }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                          className="max-w-4xl mx-auto text-center pointer-events-auto"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl"
                          >
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-medium leading-relaxed drop-shadow-lg"
                            >
                              {part}
                            </motion.p>
                            {index < storyParts.length - 1 && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 text-white/60 text-sm md:text-base"
                              >
                                Scroll to continue...
                              </motion.div>
                            )}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
        )}

        {/* Content Overlay - shown when not scrolling through story */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12 lg:pb-16 z-10">
          <div className="container mx-auto px-4 w-full">
            <div className="max-w-3xl mx-auto">
              <AnimatePresence>
                {(!isActive || activeStoryStep === 0 || storyParts.length === 0) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 shadow-2xl"
                  >
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 drop-shadow-lg">
                      {memory.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed mb-4 drop-shadow-md">
                      {memory.description}
                    </p>
                    {memory.location && (
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">
                          {formatLocation(memory.location)}
                        </span>
                      </div>
                    )}
                    {storyParts.length > 0 && isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-4 text-white/80 text-sm md:text-base italic"
                      >
                        Scroll to discover the story...
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
