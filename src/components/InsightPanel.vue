<script setup lang="ts">
import type { Insight } from '@/types/campaign'

interface Props {
  insights: Insight[]
}

defineProps<Props>()
</script>

<template>
  <section class="insight-panel">
    <h3>Insights</h3>
    <ul>
      <li
        v-for="insight in insights"
        :key="insight.id"
        :class="['insight-item', `insight-item--${insight.severity}`]"
      >
        <p class="insight-title">{{ insight.title }}</p>
        <p class="insight-message">{{ insight.message }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.insight-panel {
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: var(--surface);
  padding: 1rem;
}

h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.7rem;
}

.insight-item {
  border-radius: 12px;
  border: 1px solid;
  padding: 0.75rem;
}

.insight-item--warning {
  border-color: #f7cf97;
  background: #fff7ea;
}

.insight-item--info {
  border-color: #bcd6f8;
  background: #f4f9ff;
}

.insight-item--success {
  border-color: #a7decd;
  background: #f2fbf7;
}

.insight-title {
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
}

.insight-message {
  margin: 0.25rem 0 0;
  color: var(--text-secondary);
  font-size: 0.88rem;
}
</style>
