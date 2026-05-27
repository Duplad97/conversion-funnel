<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import CampaignList from '@/components/CampaignList.vue'
import { getCampaigns } from '@/services/campaignService'
import type { Campaign } from '@/types/campaign'
import { getErrorMessage } from '@/utils/errorHandling'
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
  } catch (error: unknown) {
    errorMessage.value = getErrorMessage(
      error,
      'Unable to load campaigns. Please refresh and try again.',
    )
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
  <v-row class="mb-5" align="center" justify="space-between">
    <v-col cols="12" md="9" lg="8">
      <v-sheet class="header-panel" rounded="lg" border>
        <div class="page-eyebrow">Campaign browser</div>
        <h1 class="page-title">Campaign Funnel Analytics</h1>
        <p class="page-subtitle">
          Select a campaign to inspect funnel performance and identify where users drop off.
        </p>
      </v-sheet>
    </v-col>
  </v-row>

  <v-progress-linear v-if="isLoading" indeterminate color="primary" class="mb-4" />

  <v-alert v-else-if="errorMessage" color="error" variant="tonal" border="start" class="mb-4">
    <div class="d-flex align-center justify-space-between ga-3 flex-wrap">
      <span>{{ errorMessage }}</span>
      <v-btn size="small" variant="outlined" color="error" @click="loadCampaigns">Retry</v-btn>
    </div>
  </v-alert>

  <CampaignList v-else :items="campaignOverview" @select="openCampaign" />
</template>

<style scoped>
.page-eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  color: rgba(var(--v-theme-on-surface), 0.65);
  margin-bottom: 0.35rem;
}

.header-panel {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.96), rgba(244, 250, 255, 0.9));
  padding: 1rem 1.1rem;
}

h1 {
  font-size: clamp(1.45rem, 2.3vw, 1.9rem);
  line-height: 1.15;
  margin: 0 0 0.25rem;
}

p {
  margin: 0;
  color: rgba(var(--v-theme-on-surface), 0.78);
}
</style>
