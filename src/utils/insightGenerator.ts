import type { Campaign, CampaignMetrics, Insight } from '@/types/campaign'

export const generateInsights = (campaign: Campaign, metrics: CampaignMetrics): Insight[] => {
  const insights: Insight[] = []
  const worstStepType = metrics.biggestDropOff.stepType
  const worstDropOff = metrics.biggestDropOff.dropOffRate

  if (worstStepType === 'email' && worstDropOff >= 0.6) {
    insights.push({
      id: 'email-dropoff',
      severity: 'warning',
      title: 'High drop-off on email step',
      message:
        'Consider simplifying the email form by reducing required fields and clarifying value.',
    })
  }

  if (worstStepType === 'teaser' && worstDropOff >= 0.5) {
    insights.push({
      id: 'teaser-dropoff',
      severity: 'warning',
      title: 'Large drop-off on teaser',
      message:
        'Strengthen the value proposition and headline so users understand the immediate benefit.',
    })
  }

  if (metrics.overallConversionRate <= 0.12) {
    insights.push({
      id: 'overall-low',
      severity: 'warning',
      title: 'Overall conversion is low',
      message: `This campaign converts only ${(metrics.overallConversionRate * 100).toFixed(1)}%. Review early funnel messaging first.`,
    })
  }

  const healthyStepFlow = metrics.stepsWithMetrics.every((step) => step.stepConversionRate >= 0.6)
  if (healthyStepFlow && metrics.overallConversionRate >= 0.35) {
    insights.push({
      id: 'healthy-flow',
      severity: 'success',
      title: 'Campaign is performing well',
      message:
        'Conversion is stable across all steps. This campaign can be a reference for future tests.',
    })
  }

  const firstStep = campaign.steps[0]
  if (firstStep && firstStep.views < 5000) {
    insights.push({
      id: 'low-volume',
      severity: 'info',
      title: 'Traffic volume is limited',
      message: 'Interpret performance carefully because total step volume is relatively low.',
    })
  }

  if (insights.length === 0) {
    insights.push({
      id: 'default',
      severity: 'info',
      title: 'No major risk detected',
      message: 'Funnel behavior is mixed but no single step appears critically weak.',
    })
  }

  return insights
}
