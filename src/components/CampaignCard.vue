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
  <v-card class="campaign-card" hover @click="$emit('select')">
    <div class="card-accent" />
    <v-card-title class="d-flex align-start justify-space-between ga-3">
      <span class="campaign-card__title">{{ campaign.name }}</span>
      <v-chip color="primary" variant="flat" size="small" class="text-capitalize">
        {{ campaign.device }}
      </v-chip>
    </v-card-title>

    <v-card-text class="pt-1">
      <div class="campaign-card__metrics">
        <div>
          <div class="metric-label">Overall conversion</div>
          <div class="metric-value">{{ formatPercent(metrics.overallConversionRate) }}</div>
        </div>
        <div>
          <div class="metric-label">Steps</div>
          <div class="metric-value">{{ campaign.steps.length }}</div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.campaign-card {
  cursor: pointer;
  transition: transform 0.15s ease;
  overflow: hidden;
  position: relative;
}

.campaign-card:hover {
  transform: translateY(-2px);
}

.card-accent {
  height: 4px;
  background: linear-gradient(90deg, #0b7285, #0f766e);
}

.campaign-card__title {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
}

.campaign-card__metrics {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.metric-label {
  color: rgba(var(--v-theme-on-surface), 0.65);
  font-size: 0.8rem;
}

.metric-value {
  margin-top: 0.2rem;
  font-weight: 700;
  font-size: 1.2rem;
}
</style>
