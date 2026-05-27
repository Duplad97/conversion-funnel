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
  <v-row dense>
    <v-col v-for="item in items" :key="item.campaign.id" cols="12" md="6" lg="4">
      <CampaignCard
        :campaign="item.campaign"
        :metrics="item.metrics"
        @select="onSelect(item.campaign.id)"
      />
    </v-col>
  </v-row>
</template>

<style scoped></style>
