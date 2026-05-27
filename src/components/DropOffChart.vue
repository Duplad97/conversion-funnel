<script setup lang="ts">
import { computed } from 'vue'
import type { ApexOptions } from 'apexcharts'
import VueApexCharts from 'vue3-apexcharts'

import type { FunnelStepMetrics } from '@/types/campaign'

interface Props {
  steps: FunnelStepMetrics[]
  biggestDropOffStepId: string
}

const props = defineProps<Props>()

const categories = computed(() => props.steps.map((step) => step.name))

const data = computed(() => props.steps.map((step) => Number((step.dropOffRate * 100).toFixed(1))))

const colors = computed(() => {
  return props.steps.map((step) => (step.id === props.biggestDropOffStepId ? '#b45309' : '#64748b'))
})

const series = computed(() => [
  {
    name: 'Drop-off',
    data: data.value,
  },
])

const chartOptions = computed<ApexOptions>(() => ({
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    animations: {
      enabled: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 4,
      distributed: true,
      barHeight: '55%',
    },
  },
  colors: colors.value,
  dataLabels: {
    enabled: true,
    formatter: (value: number) => `${value.toFixed(1)}%`,
    style: {
      fontSize: '11px',
      fontWeight: '600',
    },
  },
  xaxis: {
    categories: categories.value,
    min: 0,
    max: 100,
    labels: {
      formatter: (value: string) => `${Number(value).toFixed(0)}%`,
    },
  },
  yaxis: {
    labels: {
      maxWidth: 220,
    },
  },
  grid: {
    strokeDashArray: 4,
    borderColor: '#e2e8f0',
  },
  tooltip: {
    y: {
      formatter: (value: number) => `${value.toFixed(1)}% drop-off`,
    },
  },
  legend: {
    show: false,
  },
}))
</script>

<template>
  <v-card class="chart-card">
    <v-card-title class="chart-title">Drop-off by Step</v-card-title>
    <v-card-text class="chart-body">
      <p class="chart-subtitle">
        The highlighted bar marks the biggest drop-off point in this funnel.
      </p>
      <VueApexCharts type="bar" height="220" :options="chartOptions" :series="series" />
    </v-card-text>
  </v-card>
</template>

<style scoped>
.chart-card {
  margin-top: 0.25rem;
}

.chart-title {
  font-weight: 700;
  padding-bottom: 0.25rem;
}

.chart-body {
  padding-top: 0.5rem;
}

.chart-subtitle {
  margin: 0 0 0.6rem;
  font-size: 0.84rem;
  color: rgba(var(--v-theme-on-surface), 0.68);
}
</style>
