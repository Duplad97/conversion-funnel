<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import FunnelView from '@/components/FunnelView.vue'
import InsightPanel from '@/components/InsightPanel.vue'
import MetricsSummary from '@/components/MetricsSummary.vue'
import { getCampaignById } from '@/services/campaignService'
import type { Campaign } from '@/types/campaign'
import { getCampaignMetrics } from '@/utils/funnelCalculations'
import { generateInsights } from '@/utils/insightGenerator'

const route = useRoute()
const router = useRouter()

const campaign = ref<Campaign | null>(null)
const isLoading = ref(true)

const campaignId = computed(() => String(route.params.campaignId ?? ''))

const metrics = computed(() => {
  if (!campaign.value) {
    return null
  }

  return getCampaignMetrics(campaign.value)
})

const insights = computed(() => {
  if (!campaign.value || !metrics.value) {
    return []
  }

  return generateInsights(campaign.value, metrics.value)
})

const loadCampaign = async (): Promise<void> => {
  isLoading.value = true
  campaign.value = await getCampaignById(campaignId.value)
  isLoading.value = false
}

const backToCampaigns = async (): Promise<void> => {
  await router.push({ name: 'campaigns' })
}

onMounted(() => {
  void loadCampaign()
})
</script>

<template>
  <v-btn class="mb-4" variant="text" color="primary" @click="backToCampaigns">
    <span class="back-arrow" aria-hidden="true">&larr;</span>
    Back to campaigns
  </v-btn>

  <v-progress-linear v-if="isLoading" indeterminate color="primary" class="mb-4" />

  <section v-else-if="campaign && metrics" class="details-layout">
    <MetricsSummary :campaign="campaign" :metrics="metrics" />

    <FunnelView
      :steps="metrics.stepsWithMetrics"
      :biggest-drop-off-step-id="metrics.biggestDropOff.stepId"
    />
    <InsightPanel :insights="insights" />
  </section>

  <v-alert v-else color="error" variant="tonal" border="start">
    Campaign not found. It may have been removed from the static dataset.
  </v-alert>
</template>

<style scoped>
.details-layout {
  display: grid;
  gap: 1rem;
}

.back-arrow {
  margin-right: 0.35rem;
  font-size: 0.95rem;
  line-height: 1;
}
</style>
