<script setup lang="ts">
import type { FunnelStepMetrics } from '@/types/campaign'
import { formatInteger, formatPercent } from '@/utils/formatters'

interface Props {
  step: FunnelStepMetrics
  isWorst: boolean
}

defineProps<Props>()
</script>

<template>
  <tr :class="['step-row', { 'step-row--worst': isWorst }]">
    <td>
      <p class="step-name">{{ step.name }}</p>
      <div class="step-meta">
        <v-chip size="x-small" variant="tonal" color="secondary">{{ step.type }}</v-chip>
        <span>{{ step.description }}</span>
      </div>
    </td>
    <td>{{ formatInteger(step.views) }}</td>
    <td>{{ formatInteger(step.proceeds) }}</td>
    <td>{{ formatPercent(step.stepConversionRate) }}</td>
    <td>{{ formatPercent(step.dropOffRate) }}</td>
  </tr>
</template>

<style scoped>
.step-row td {
  padding: 0.85rem 0.75rem;
  font-size: 0.92rem;
  color: rgba(var(--v-theme-on-surface), 0.92);
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}

.step-row--worst {
  background: rgba(var(--v-theme-warning), 0.1);
}

.step-name {
  margin: 0;
  font-weight: 600;
}

.step-meta {
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(var(--v-theme-on-surface), 0.68);
  font-size: 0.8rem;
  flex-wrap: wrap;
}
</style>
