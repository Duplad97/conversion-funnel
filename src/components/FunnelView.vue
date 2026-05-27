<script setup lang="ts">
import FunnelStepCard from '@/components/FunnelStepCard.vue'
import type { FunnelStepMetrics } from '@/types/campaign'

interface Props {
  steps: FunnelStepMetrics[]
  biggestDropOffStepId: string
}

defineProps<Props>()
</script>

<template>
  <v-card class="funnel-card">
    <v-card-title class="funnel-title">Funnel Steps</v-card-title>
    <v-card-text class="pa-0">
      <v-table density="comfortable">
        <thead>
          <tr>
            <th>Step</th>
            <th>Views</th>
            <th>Proceeds</th>
            <th>Step conversion</th>
            <th>Drop-off</th>
          </tr>
        </thead>
        <tbody>
          <FunnelStepCard
            v-for="step in steps"
            :key="step.id"
            :step="step"
            :is-worst="step.id === biggestDropOffStepId"
          />
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.funnel-card {
  overflow: hidden;
}

.funnel-title {
  padding: 0.95rem 1rem;
  font-weight: 700;
}

:deep(thead th) {
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: rgba(var(--v-theme-on-surface), 0.62);
  background: rgba(var(--v-theme-surface-variant), 0.42);
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.08);
}
</style>
