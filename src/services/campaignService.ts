import conversionData from '../../conversion-data.json'

import type { Campaign, ConversionData } from '@/types/campaign'

let campaignCache: Campaign[] | null = null

const data = conversionData as ConversionData

export const getCampaigns = async (): Promise<Campaign[]> => {
  if (campaignCache) {
    return campaignCache
  }

  campaignCache = data.campaigns

  return campaignCache
}

export const getCampaignById = async (campaignId: string): Promise<Campaign | null> => {
  const campaigns = await getCampaigns()

  return campaigns.find((campaign) => campaign.id === campaignId) ?? null
}
