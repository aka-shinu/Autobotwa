export interface MemoryStoryStep {
  memoryId: string
  stepIndex: number
  stepType: 'title' | 'story' | 'description'
  content: string
}

export interface MemoryStoryStepData {
  step: MemoryStoryStep
  isActive: boolean
}
























