# The problem

We need a small, understandable and easy-to-use web application to help marketers find out where their conversion rates drops-off in their campaigns.

# V1 Scope

## Must-have

- List of campaigns with overall conversion rate
- Detailed view of the campaign to see the conversion rates between each step
- Highlight the step where the biggest drop-off happen

## Nice-to-have

- Insights / Recommendations for campaigns based on the data
- Simple chart-view to visualize the conversion rates of each step

# Architecture / Main Components

The project is built with Vue 3 using Vue Router for navigation, and styling is handled with Vuetify 4. The charts are built using ApexCharts library, and the project has basic UI tests using Vitest.

## Component Structure

```text
App
├── CampaignsPage
│   └── CampaignList
│       └── CampaignCard
└── CampaignDetailsPage
	├── MetricsSummary
	├── FunnelView
	│   └── FunnelStepCard
	├── DropOffChart
	└── InsightPanel
```

### Responsibilities

- App: Main shell with top navigation and router outlet.
- CampaignsPage: Loads campaigns and displays the overview screen.
- CampaignList: Renders all campaign cards in a responsive grid.
- CampaignCard: Shows campaign name, device, overall conversion, and step count.
- CampaignDetailsPage: Loads one campaign and renders the detailed analytics view.
- MetricsSummary: Shows top-level KPI cards and biggest drop-off summary.
- FunnelView: Displays the step-by-step funnel table.
- FunnelStepCard: Renders one row in the funnel table.
- DropOffChart: Visualizes drop-off percentage by funnel step.
- InsightPanel: Displays deterministic recommendations based on metrics.

The insights are generated with the `generateInsight` function using hard-coded rules.

# How to run the app

If you want to try the app locally, `README.md` has a setup guide, but since the project is deployed to Vercel, no setup required to try it.

### https://conversion-funnel-pfmw.vercel.app/

# AI usage

The project is built with GitHub Copilot, as the first step I wrote some basic context for the AI inside `AI_CONTEXT.md` then asked the Agent to start building based on that, and then made some polishments and improvements with further prompts. In the meanwhile I was actively reviewing the code and project structure, and asked for corrections if it was necessary.

# V2 improvements

- The current dataset doesn't contain dates, so we could improve it by adding some and implement date range filtering so we could compare funnel performance for eg. the last 7/30/90 days
- Filter campaigns by device type
- Compare campaign performances side-by-side
- Improve the insights by either a richer ruleset or using AI
- Add a CSV export function and implement a shareable report view
