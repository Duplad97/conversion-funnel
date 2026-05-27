<script setup lang="ts">
import type { Campaign, CampaignMetrics } from '@/types/campaign'
import { formatPercent } from '@/utils/formatters'

interface Props {
  campaign: Campaign
  metrics: CampaignMetrics
}

defineProps<Props>()

defineEmits<{
  select: []
}>()
</script>

<template>
  <button class="campaign-card" type="button" @click="$emit('select')">
    <div class="campaign-card__header">
      <h3>{{ campaign.name }}</h3>
      <span class="chip">{{ campaign.deviceType }}</span>
    </div>

    <div class="campaign-card__metrics">
      <div>
        <p class="metric-label">Overall conversion</p>
        <p class="metric-value">{{ formatPercent(metrics.overallConversionRate) }}</p>
      </div>
      <div>
        <p class="metric-label">Steps</p>
        <p class="metric-value">{{ campaign.steps.length }}</p>
      </div>
    </div>
  </button>
</template>

<style scoped>
.campaign-card {
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--surface);
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.campaign-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgb(14 20 43 / 10%);
}

.campaign-card__header {
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.campaign-card__header h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--text-primary);
}

.chip {
  border-radius: 999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent-ink);
  background: var(--accent-soft);
  text-transform: capitalize;
}

.campaign-card__metrics {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.metric-label {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.8rem;
}

.metric-value {
  margin: 0.15rem 0 0;
  color: var(--text-primary);
  font-weight: 700;
  font-size: 1.1rem;
}
</style>
