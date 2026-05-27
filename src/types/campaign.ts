export type DeviceType = 'desktop' | 'mobile' | 'tablet'

export interface FunnelStep {
  id: string
  name: string
  views: number
  proceeds: number
}

export interface Campaign {
  id: string
  name: string
  deviceType: DeviceType
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
