<script setup lang="ts">
import CampaignCard from '@/components/CampaignCard.vue'
import type { Campaign, CampaignMetrics } from '@/types/campaign'

interface CampaignOverview {
  campaign: Campaign
  metrics: CampaignMetrics
}

interface Props {
  items: CampaignOverview[]
}

defineProps<Props>()

const emit = defineEmits<{
  select: [campaignId: string]
}>()

const onSelect = (campaignId: string): void => {
  emit('select', campaignId)
}
</script>

<template>
  <section class="campaign-list">
    <CampaignCard
      v-for="item in items"
      :key="item.campaign.id"
      :campaign="item.campaign"
      :metrics="item.metrics"
      @select="onSelect(item.campaign.id)"
    />
  </section>
</template>

<style scoped>
.campaign-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}
</style>
