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
  <v-row dense>
    <v-col cols="12" md="6" lg="3">
      <v-card rounded="lg" elevation="2" class="h-100">
        <v-card-text>
          <div class="label">Campaign</div>
          <h2 class="summary-heading">{{ campaign.name }}</h2>
          <v-chip size="small" variant="tonal" color="secondary">{{ campaign.device }}</v-chip>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" lg="3">
      <v-card rounded="lg" elevation="2" class="h-100">
        <v-card-text>
          <div class="label">Overall conversion</div>
          <h2 class="summary-heading">{{ formatPercent(metrics.overallConversionRate) }}</h2>
          <v-progress-linear
            :model-value="Math.min(metrics.overallConversionRate * 100, 100)"
            color="primary"
            height="8"
            rounded
          />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" lg="3">
      <v-card rounded="lg" elevation="2" class="h-100">
        <v-card-text>
          <div class="label">Total views</div>
          <h2 class="summary-heading">{{ formatInteger(metrics.totalViews) }}</h2>
          <div class="subtext">Initial funnel entries</div>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6" lg="3">
      <v-alert class="h-100" color="warning" variant="tonal" border="start" prominent>
        <div class="label">Biggest drop-off</div>
        <h2 class="summary-heading">{{ metrics.biggestDropOff.stepName }}</h2>
        <div class="subtext">{{ formatPercent(metrics.biggestDropOff.dropOffRate) }} drop-off</div>
      </v-alert>
    </v-col>
  </v-row>
</template>

<style scoped>
.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: rgba(var(--v-theme-on-surface), 0.65);
}

h2 {
  font-size: 1.2rem;
  margin: 0.35rem 0;
}

.subtext {
  color: rgba(var(--v-theme-on-surface), 0.65);
  font-size: 0.85rem;
}

.summary-heading {
  line-height: 1.15;
}
</style>
