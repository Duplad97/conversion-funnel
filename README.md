# Conversion Funnel

A small funnel analytics web application for popup campaigns.

The app helps marketers understand where users drop off in multi-step popup funnels by showing step-level performance, biggest drop-off, and deterministic recommendations.

## Getting Started

Install dependencies:

```sh
npm install
```

Start development server:

```sh
npm run dev
```

Open the app at the URL printed by Vite (typically http://localhost:5173).

## Tech Stack

- Vue 3
- Vue Router
- TypeScript
- Vuetify 4
- Vite

## Features

- Campaign list with campaign name, device, overall conversion, and step count
- Campaign details page with funnel step metrics
- Biggest drop-off detection and highlight
- Deterministic insight panel with rule-based recommendations
- Static JSON data source (no backend)

## Data Source

Campaign data is loaded from the root file:

- conversion-data.json

The service layer reads this file and exposes typed access methods for campaigns.

## Project Structure

```text
src/
  components/
    CampaignCard.vue
    CampaignList.vue
    FunnelStepCard.vue
    FunnelView.vue
    InsightPanel.vue
    MetricsSummary.vue
  pages/
    CampaignsPage.vue
    CampaignDetailsPage.vue
  plugins/
    vuetify.ts
  router/
    index.ts
  services/
    campaignService.ts
  types/
    campaign.ts
  utils/
    funnelCalculations.ts
    insightGenerator.ts
    formatters.ts
  App.vue
  main.ts
  style.css
```

## Scripts

- npm run dev: Start Vite dev server
- npm run type-check: Run Vue + TypeScript checks
- npm run build-only: Build production assets
- npm run build: Type-check and build
- npm run preview: Preview production build locally
- npm run lint: Run oxlint and eslint
- npm run format: Run Prettier on src
