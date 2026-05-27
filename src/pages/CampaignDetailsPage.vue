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
  <button class="back-link" type="button" @click="backToCampaigns">Back to campaigns</button>

  <p v-if="isLoading" class="status">Loading campaign details...</p>

  <section v-else-if="campaign && metrics" class="details-layout">
    <MetricsSummary :campaign="campaign" :metrics="metrics" />

    <div class="highlight">
      Biggest drop-off: {{ metrics.biggestDropOff.stepName }}
      ({{ (metrics.biggestDropOff.dropOffRate * 100).toFixed(1) }}% drop-off)
    </div>

    <FunnelView :steps="metrics.stepsWithMetrics" :biggest-drop-off-step-id="metrics.biggestDropOff.stepId" />
    <InsightPanel :insights="insights" />
  </section>

  <p v-else class="status status--error">
    Campaign not found. It may have been removed from the static dataset.
  </p>
</template>

<style scoped>
.back-link {
  border: none;
  background: none;
  color: var(--accent-ink);
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 0.8rem;
  padding: 0;
}

.details-layout {
  display: grid;
  gap: 0.9rem;
}

.highlight {
  border: 1px solid #f3c783;
  background: #fff8ec;
  color: #5d3f07;
  border-radius: 12px;
  padding: 0.8rem;
  font-weight: 700;
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
