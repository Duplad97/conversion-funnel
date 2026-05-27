export type DeviceType = 'desktop' | 'mobile'

export type FunnelStepType = 'teaser' | 'email' | 'success' | 'exit-intent' | 'coupon'

export interface FunnelStep {
  id: string
  name: string
  type: FunnelStepType
  views: number
  proceeds: number
  description: string
}

export interface Campaign {
  id: string
  name: string
  device: DeviceType
  steps: FunnelStep[]
}

export interface FunnelStepMetrics extends FunnelStep {
  stepConversionRate: number
  dropOffRate: number
  dropOffCount: number
}

export interface BiggestDropOff {
  stepId: string
  stepName: string
  stepType: FunnelStepType
  dropOffRate: number
}

export interface CampaignMetrics {
  campaignId: string
  totalViews: number
  totalConversions: number
  overallConversionRate: number
  stepsWithMetrics: FunnelStepMetrics[]
  biggestDropOff: BiggestDropOff
}

export type InsightSeverity = 'success' | 'warning' | 'info'

export interface Insight {
  id: string
  severity: InsightSeverity
  title: string
  message: string
}

export interface ConversionData {
  campaigns: Campaign[]
}
