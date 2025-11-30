import { Memory } from '@/types/memories'
import { MemoryStoryStep } from '@/types/memory-story'

/**
 * Generates all story steps from a memory object
 * Returns an array of steps: title, story parts, and description
 */
export function generateMemorySteps(memory: Memory): MemoryStoryStep[] {
  const steps: MemoryStoryStep[] = []

  // Step 0: Title
  steps.push({
    memoryId: memory.id,
    stepIndex: 0,
    stepType: 'title',
    content: memory.title,
  })

  // Steps 1 to N: Story parts
  if (memory.story?.parts) {
    memory.story.parts.forEach((part, index) => {
      steps.push({
        memoryId: memory.id,
        stepIndex: index + 1,
        stepType: 'story',
        content: part,
      })
    })
  }

  // Final step: Description
  const descriptionIndex = steps.length
  steps.push({
    memoryId: memory.id,
    stepIndex: descriptionIndex,
    stepType: 'description',
    content: memory.description,
  })

  return steps
}

/**
 * Calculates the total number of steps for a memory
 */
export function getMemoryTotalSteps(memory: Memory): number {
  const storyPartsCount = memory.story?.parts?.length || 0
  return 2 + storyPartsCount // title + description + story parts
}

/**
 * Generates all steps for all memories
 */
export function generateAllMemorySteps(memories: Memory[]): MemoryStoryStep[] {
  return memories.flatMap((memory) => generateMemorySteps(memory))
}
























