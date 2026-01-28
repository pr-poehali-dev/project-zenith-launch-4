import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  gallery?: Array<{
    url: string
    title: string
  }>
  steps?: Array<{
    icon: string
    title: string
    description: string
  }>
}

export interface SectionProps extends Section {
  isActive: boolean
}