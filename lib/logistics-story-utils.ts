import { LogisticsStoryChapter } from '@/types/logistics-story'
import { LogisticsStoryStep } from '@/types/logistics-story'

/**
 * Generates all story steps from a logistics story chapter
 * Returns an array of steps based on the chapter type
 */
export function generateLogisticsStorySteps(chapter: LogisticsStoryChapter): LogisticsStoryStep[] {
  const steps: LogisticsStoryStep[] = []

  // Handle title step
  if (chapter.stepType === 'title') {
    steps.push({
      chapterId: chapter.id,
      stepIndex: 0,
      stepType: 'title',
      content: chapter.title,
      image: chapter.image,
      highlights: chapter.highlights
    })
  }

  // Handle story steps (can be single or multiple parts)
  if (chapter.stepType === 'story') {
    const contentArray = Array.isArray(chapter.content) ? chapter.content : [chapter.content]
    const images = chapter.images || [chapter.image]
    
    contentArray.forEach((contentPart, index) => {
      steps.push({
        chapterId: chapter.id,
        stepIndex: index + 1,
        stepType: 'story',
        content: contentPart,
        image: images[index] || images[images.length - 1] || chapter.image,
        highlights: chapter.highlights?.filter(h => 
          // Filter highlights for this part index
          (h as any).partIndex === undefined || (h as any).partIndex === index
        )
      })
    })
  }

  // Handle service-showcase steps
  if (chapter.stepType === 'service-showcase') {
    const contentArray = Array.isArray(chapter.content) ? chapter.content : [chapter.content]
    const images = chapter.images || [chapter.image]
    
    contentArray.forEach((contentPart, index) => {
      steps.push({
        chapterId: chapter.id,
        stepIndex: index + 1,
        stepType: 'service-showcase',
        content: contentPart,
        image: images[index] || images[images.length - 1] || chapter.image,
        serviceId: chapter.serviceId,
        highlights: chapter.highlights?.filter(h => 
          (h as any).partIndex === undefined || (h as any).partIndex === index
        )
      })
    })
  }

  // Handle coverage steps
  if (chapter.stepType === 'coverage') {
    const contentArray = Array.isArray(chapter.content) ? chapter.content : [chapter.content]
    const images = chapter.images || [chapter.image]
    
    contentArray.forEach((contentPart, index) => {
      steps.push({
        chapterId: chapter.id,
        stepIndex: index + 1,
        stepType: 'coverage',
        content: contentPart,
        image: images[index] || images[images.length - 1] || chapter.image,
        highlights: chapter.highlights?.filter(h => 
          (h as any).partIndex === undefined || (h as any).partIndex === index
        )
      })
    })
  }

  // Handle CTA steps
  if (chapter.stepType === 'cta') {
    const contentArray = Array.isArray(chapter.content) ? chapter.content : [chapter.content]
    const images = chapter.images || [chapter.image]
    
    contentArray.forEach((contentPart, index) => {
      steps.push({
        chapterId: chapter.id,
        stepIndex: index + 1,
        stepType: 'cta',
        content: contentPart,
        image: images[index] || images[images.length - 1] || chapter.image,
        highlights: chapter.highlights?.filter(h => 
          (h as any).partIndex === undefined || (h as any).partIndex === index
        )
      })
    })
  }

  return steps
}

/**
 * Calculates the total number of steps for a chapter
 */
export function getChapterTotalSteps(chapter: LogisticsStoryChapter): number {
  if (chapter.stepType === 'title') {
    return 1
  }
  
  const contentArray = Array.isArray(chapter.content) ? chapter.content : [chapter.content]
  return contentArray.length
}

/**
 * Generates all steps for all chapters
 */
export function generateAllLogisticsStorySteps(chapters: LogisticsStoryChapter[]): LogisticsStoryStep[] {
  return chapters.flatMap((chapter) => generateLogisticsStorySteps(chapter))
}

/**
 * Gets the image for a specific step
 */
export function getImageForStep(chapter: LogisticsStoryChapter, step: LogisticsStoryStep): string {
  if (!chapter.images || chapter.images.length === 0) {
    return chapter.image
  }

  // Title step (stepIndex 0) -> images[0] or default
  if (step.stepType === 'title') {
    return chapter.images[0] || chapter.image
  }

  // Other steps -> images[stepIndex] or cycle through
  const imageIndex = step.stepIndex - 1 // Adjust for title step
  if (imageIndex >= 0 && imageIndex < chapter.images.length) {
    return chapter.images[imageIndex]
  }
  
  // If not enough images, use last image or default
  return chapter.images[chapter.images.length - 1] || chapter.image
}











