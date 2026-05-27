<script setup lang="ts">
import type { Insight } from '@/types/campaign'

interface Props {
  insights: Insight[]
}

defineProps<Props>()

const getInsightColor = (severity: Insight['severity']): string => {
  if (severity === 'success') {
    return 'success'
  }

  if (severity === 'warning') {
    return 'warning'
  }

  return 'info'
}
</script>

<template>
  <v-card rounded="lg" elevation="2">
    <v-card-title>Insights</v-card-title>
    <v-card-text class="d-grid ga-3">
      <v-alert
        v-for="insight in insights"
        :key="insight.id"
        :color="getInsightColor(insight.severity)"
        variant="tonal"
        border="start"
      >
        <div class="insight-title">{{ insight.title }}</div>
        <div class="insight-message">{{ insight.message }}</div>
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.insight-title {
  font-weight: 700;
}

.insight-message {
  margin-top: 0.2rem;
}
</style>
