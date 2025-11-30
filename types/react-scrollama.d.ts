declare module 'react-scrollama' {
  import * as React from 'react'

  export interface ScrollamaProps {
    onStepEnter?: (data: { data: any; direction: string; element: HTMLElement }) => void
    onStepExit?: (data: { data: any; direction: string; element: HTMLElement }) => void
    onStepProgress?: (data: { data: any; progress: number; element: HTMLElement }) => void
    offset?: number | string
    progress?: boolean
    threshold?: number
    debug?: boolean
    children?: React.ReactNode
  }

  export interface StepProps {
    data?: any
    children: React.ReactNode
  }

  export const Scrollama: React.FC<ScrollamaProps>
  export const Step: React.FC<StepProps>
}

