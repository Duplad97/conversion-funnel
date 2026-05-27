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
    </td>
    <td>{{ formatInteger(step.views) }}</td>
    <td>{{ formatInteger(step.proceeds) }}</td>
    <td>{{ formatPercent(step.stepConversionRate) }}</td>
    <td>{{ formatPercent(step.dropOffRate) }}</td>
  </tr>
</template>

<style scoped>
.step-row td {
  padding: 0.75rem;
  border-bottom: 1px solid var(--border-color);
  font-size: 0.92rem;
  color: var(--text-primary);
}

.step-row--worst {
  background: #fff7ea;
}

.step-name {
  margin: 0;
  font-weight: 600;
}
</style>
