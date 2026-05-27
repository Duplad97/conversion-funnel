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
  <section class="funnel-view">
    <h3>Funnel Steps</h3>
    <div class="table-wrap">
      <table>
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
      </table>
    </div>
  </section>
</template>

<style scoped>
.funnel-view {
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--surface);
  padding: 1rem;
}

h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  text-align: left;
  font-size: 0.82rem;
  color: var(--text-muted);
  padding: 0.7rem;
  border-bottom: 1px solid var(--border-color);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
</style>
