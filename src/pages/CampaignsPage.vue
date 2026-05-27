<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import CampaignList from '@/components/CampaignList.vue'
import { getCampaigns } from '@/services/campaignService'
import type { Campaign } from '@/types/campaign'
import { getCampaignMetrics } from '@/utils/funnelCalculations'

const router = useRouter()

const campaigns = ref<Campaign[]>([])
const isLoading = ref(true)
const errorMessage = ref('')

const campaignOverview = computed(() => {
  return campaigns.value.map((campaign) => ({
    campaign,
    metrics: getCampaignMetrics(campaign),
  }))
})

const loadCampaigns = async (): Promise<void> => {
  try {
    isLoading.value = true
    errorMessage.value = ''
    campaigns.value = await getCampaigns()
  } catch {
    errorMessage.value = 'Unable to load campaigns. Please refresh and try again.'
  } finally {
    isLoading.value = false
  }
}

const openCampaign = async (campaignId: string): Promise<void> => {
  await router.push({ name: 'campaign-details', params: { campaignId } })
}

onMounted(() => {
  void loadCampaigns()
})
</script>

<template>
  <section class="page-header">
    <h1>Campaign Funnel Analytics</h1>
    <p>Select a campaign to inspect funnel performance and identify where users drop off.</p>
  </section>

  <p v-if="isLoading" class="status">Loading campaigns...</p>
  <p v-else-if="errorMessage" class="status status--error">{{ errorMessage }}</p>
  <CampaignList v-else :items="campaignOverview" @select="openCampaign" />
</template>

<style scoped>
.page-header {
  margin-bottom: 1rem;
}

h1 {
  margin: 0;
  color: var(--text-primary);
  font-size: clamp(1.45rem, 2.3vw, 1.9rem);
}

p {
  color: var(--text-secondary);
  margin: 0.4rem 0 0;
}

.status {
  border: 1px solid var(--border-color);
  background: var(--surface);
  border-radius: 12px;
  padding: 0.8rem;
}

.status--error {
  border-color: #f5a2a2;
  background: #fff4f4;
}
</style>
