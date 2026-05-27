<script setup lang="ts">
import type { Campaign, CampaignMetrics } from '@/types/campaign'
import { formatInteger, formatPercent } from '@/utils/formatters'

interface Props {
  campaign: Campaign
  metrics: CampaignMetrics
}

defineProps<Props>()
</script>

<template>
  <section class="summary-grid">
    <article class="summary-card">
      <p class="label">Campaign</p>
      <h2>{{ campaign.name }}</h2>
      <p class="subtext">{{ campaign.deviceType }} experience</p>
    </article>

    <article class="summary-card">
      <p class="label">Overall conversion</p>
      <h2>{{ formatPercent(metrics.overallConversionRate) }}</h2>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-fill" :style="{ width: `${Math.min(metrics.overallConversionRate * 100, 100)}%` }" />
      </div>
    </article>

    <article class="summary-card">
      <p class="label">Total views</p>
      <h2>{{ formatInteger(metrics.totalViews) }}</h2>
      <p class="subtext">Initial funnel entries</p>
    </article>

    <article class="summary-card summary-card--warning">
      <p class="label">Biggest drop-off</p>
      <h2>{{ metrics.biggestDropOff.stepName }}</h2>
      <p class="subtext">{{ formatPercent(metrics.biggestDropOff.dropOffRate) }} drop-off</p>
    </article>
  </section>
</template>

<style scoped>
.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.85rem;
}

.summary-card {
  border: 1px solid var(--border-color);
  background: var(--surface);
  border-radius: 14px;
  padding: 1rem;
}

.summary-card--warning {
  border-color: var(--warning-soft);
  background: #fff9ef;
}

.label {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

h2 {
  margin: 0.35rem 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.subtext {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.85rem;
}

.progress-track {
  width: 100%;
  height: 7px;
  border-radius: 99px;
  background: var(--border-color);
  overflow: hidden;
  margin-top: 0.55rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #0f7d70, #25b39f);
}
</style>
