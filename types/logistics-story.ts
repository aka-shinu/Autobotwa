export interface LogisticsStoryStep {
  chapterId: string
  stepIndex: number
  stepType: 'title' | 'story' | 'service-showcase' | 'coverage' | 'cta'
  content: string
  image?: string
  serviceId?: string // For service-showcase type
  highlights?: StoryHighlight[]
}

export interface StoryHighlight {
  text: string
  action: 'highlight' | 'underline' | 'box' | 'bracket'
  color?: string
  partIndex?: number // For multi-part content, specifies which part this highlight applies to
}

export interface LogisticsStoryChapter {
  id: string
  title: string
  description?: string
  image: string
  images?: string[] // Multiple images for different steps
  stepType: 'title' | 'story' | 'service-showcase' | 'coverage' | 'cta'
  content: string | string[] // Can be single string or array of story parts
  serviceId?: string // For service-showcase type
  highlights?: StoryHighlight[]
}

export interface LogisticsStoryStepData {
  chapter: LogisticsStoryChapter
  step: LogisticsStoryStep
  globalStepIndex: number
}

