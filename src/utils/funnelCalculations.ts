import type {
  BiggestDropOff,
  Campaign,
  CampaignMetrics,
  FunnelStep,
  FunnelStepMetrics,
} from '@/types/campaign'

const safeRate = (numerator: number, denominator: number): number => {
  if (denominator <= 0) {
    return 0
  }

  return numerator / denominator
}

export const getStepMetrics = (steps: FunnelStep[]): FunnelStepMetrics[] => {
  return steps.map((step) => {
    const stepConversionRate = safeRate(step.proceeds, step.views)
    const dropOffRate = 1 - stepConversionRate

    return {
      ...step,
      stepConversionRate,
      dropOffRate,
      dropOffCount: Math.max(step.views - step.proceeds, 0),
    }
  })
}

export const getBiggestDropOff = (stepsWithMetrics: FunnelStepMetrics[]): BiggestDropOff => {
  const fallback: BiggestDropOff = {
    stepId: '',
    stepName: 'N/A',
    stepType: 'teaser',
    dropOffRate: 0,
  }

  if (stepsWithMetrics.length === 0) {
    return fallback
  }

  const worstStep = stepsWithMetrics.reduce<BiggestDropOff>((currentWorst, step) => {
    if (step.dropOffRate > currentWorst.dropOffRate) {
      return {
        stepId: step.id,
        stepName: step.name,
        stepType: step.type,
        dropOffRate: step.dropOffRate,
      }
    }

    return currentWorst
  }, fallback)

  return worstStep
}

export const getCampaignMetrics = (campaign: Campaign): CampaignMetrics => {
  const stepsWithMetrics = getStepMetrics(campaign.steps)
  const firstStep = campaign.steps[0]
  const lastStep = campaign.steps[campaign.steps.length - 1]
  const totalViews = firstStep?.views ?? 0
  const totalConversions = lastStep?.proceeds ?? 0

  return {
    campaignId: campaign.id,
    totalViews,
    totalConversions,
    overallConversionRate: safeRate(totalConversions, totalViews),
    stepsWithMetrics,
    biggestDropOff: getBiggestDropOff(stepsWithMetrics),
  }
}
