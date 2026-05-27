import type { Campaign } from '@/types/campaign'

let campaignCache: Campaign[] | null = null

const CAMPAIGNS_URL = '/campaigns.json'

export const getCampaigns = async (): Promise<Campaign[]> => {
  if (campaignCache) {
    return campaignCache
  }

  const response = await fetch(CAMPAIGNS_URL)

  if (!response.ok) {
    throw new Error('Failed to load campaigns data.')
  }

  const data = (await response.json()) as Campaign[]
  campaignCache = data

  return data
}

export const getCampaignById = async (campaignId: string): Promise<Campaign | null> => {
  const campaigns = await getCampaigns()

  return campaigns.find((campaign) => campaign.id === campaignId) ?? null
}
