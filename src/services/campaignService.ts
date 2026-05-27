import conversionData from '../../conversion-data.json'

import type { Campaign, ConversionData } from '@/types/campaign'

let campaignCache: Campaign[] | null = null

const data = conversionData as Partial<ConversionData>

export const getCampaigns = async (): Promise<Campaign[]> => {
  if (campaignCache) {
    return campaignCache
  }

  if (!Array.isArray(data.campaigns)) {
    throw new Error('Campaign data is unavailable.')
  }

  campaignCache = data.campaigns as Campaign[]

  return campaignCache
}

export const getCampaignById = async (campaignId: string): Promise<Campaign | null> => {
  if (campaignId.trim() === '') {
    return null
  }

  const campaigns = await getCampaigns()

  return campaigns.find((campaign) => campaign.id === campaignId) ?? null
}
