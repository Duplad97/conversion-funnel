import { describe, expect, it } from 'vitest'

import MetricsSummary from '@/components/MetricsSummary.vue'
import type { Campaign, CampaignMetrics, FunnelStepMetrics } from '@/types/campaign'
import { mountWithVuetify } from '@/test/testUtils'

const stepOne: FunnelStepMetrics = {
  id: 'step_1',
  name: 'Teaser',
  type: 'teaser',
  views: 12000,
  proceeds: 4200,
  description: 'Teaser step',
  stepConversionRate: 0.35,
  dropOffRate: 0.65,
  dropOffCount: 7800,
}

const stepTwo: FunnelStepMetrics = {
  id: 'step_2',
  name: 'Email',
  type: 'email',
  views: 4200,
  proceeds: 900,
  description: 'Email step',
  stepConversionRate: 0.2143,
  dropOffRate: 0.7857,
  dropOffCount: 3300,
}

const campaign: Campaign = {
  id: 'camp_002',
  name: 'Exit Intent Offer',
  device: 'mobile',
  steps: [stepOne, stepTwo],
}

const metrics: CampaignMetrics = {
  campaignId: 'camp_002',
  totalViews: 12000,
  totalConversions: 900,
  overallConversionRate: 0.075,
  stepsWithMetrics: [stepOne, stepTwo],
  biggestDropOff: {
    stepId: 'step_2',
    stepName: 'Email',
    stepType: 'email',
    dropOffRate: 0.7857,
  },
}

describe('MetricsSummary', () => {
  it('shows key summary values for a campaign', () => {
    const wrapper = mountWithVuetify(MetricsSummary, {
      props: { campaign, metrics },
    })

    const text = wrapper.text()

    expect(text).toContain('Exit Intent Offer')
    expect(text).toContain('mobile')
    expect(text).toContain('7.5%')
    expect(text).toContain('12,000')
    expect(text).toContain('Email')
    expect(text).toContain('78.6% drop-off')
  })
})
