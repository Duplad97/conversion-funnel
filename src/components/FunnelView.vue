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
  <v-card rounded="lg" elevation="2">
    <v-card-title>Funnel Steps</v-card-title>
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

<style scoped></style>
