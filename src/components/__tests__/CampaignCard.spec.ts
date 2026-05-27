import { describe, expect, it } from 'vitest'

import CampaignCard from '@/components/CampaignCard.vue'
import type { Campaign, CampaignMetrics, FunnelStepMetrics } from '@/types/campaign'
import { mountWithVuetify } from '@/test/testUtils'

const stepOne: FunnelStepMetrics = {
  id: 'step_1',
  name: 'Teaser',
  type: 'teaser',
  views: 1000,
  proceeds: 400,
  description: 'Teaser description',
  stepConversionRate: 0.4,
  dropOffRate: 0.6,
  dropOffCount: 600,
}

const stepTwo: FunnelStepMetrics = {
  id: 'step_2',
  name: 'Email',
  type: 'email',
  views: 400,
  proceeds: 100,
  description: 'Email description',
  stepConversionRate: 0.25,
  dropOffRate: 0.75,
  dropOffCount: 300,
}

const campaign: Campaign = {
  id: 'camp_001',
  name: 'Welcome Discount Popup',
  device: 'desktop',
  steps: [stepOne, stepTwo],
}

const metrics: CampaignMetrics = {
  campaignId: 'camp_001',
  totalViews: 1000,
  totalConversions: 100,
  overallConversionRate: 0.1,
  stepsWithMetrics: [stepOne, stepTwo],
  biggestDropOff: {
    stepId: 'step_2',
    stepName: 'Email',
    stepType: 'email',
    dropOffRate: 0.75,
  },
}

describe('CampaignCard', () => {
  it('renders campaign summary details', () => {
    const wrapper = mountWithVuetify(CampaignCard, {
      props: { campaign, metrics },
    })

    const text = wrapper.text()

    expect(text).toContain('Welcome Discount Popup')
    expect(text).toContain('desktop')
    expect(text).toContain('10.0%')
    expect(text).toContain('2')
  })

  it('emits select when card is clicked', async () => {
    const wrapper = mountWithVuetify(CampaignCard, {
      props: { campaign, metrics },
    })

    await wrapper.find('.campaign-card').trigger('click')

    expect(wrapper.emitted('select')).toHaveLength(1)
  })
})
