import { createRouter, createWebHistory } from 'vue-router'
import CampaignDetailsPage from '@/pages/CampaignDetailsPage.vue'
import CampaignsPage from '@/pages/CampaignsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'campaigns',
      component: CampaignsPage,
    },
    {
      path: '/campaign/:campaignId',
      name: 'campaign-details',
      component: CampaignDetailsPage,
    },
  ],
})

export default router
