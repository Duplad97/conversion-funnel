## Goal

Build a small funnel analytics web application for popup campaigns.

The purpose of the application is to help marketers identify where users drop off in multi-step popup funnels.

Marketers currently only see the final conversion rate, but they need visibility into individual funnel steps to understand which step is causing performance issues.

The application should make it easy to:

- Browse campaigns
- Select a campaign
- View funnel performance step by step
- Identify the largest drop-off point
- Understand funnel health at a glance

## Tech Stack

- Vue 3
- Vue Router
- TypeScript
- Material UI (MUI)
- Vite

No backend should be implemented.

Data will be loaded directly from a static JSON file.

The application should be deployable as a static site on Vercel without requiring any server-side functionality.

## Product Priorities

Prioritize:

1. Clarity
2. Simplicity
3. Readability
4. Product thinking

Do NOT prioritize:

- Complex architecture
- Overengineering
- Fancy animations
- Enterprise patterns
- Premature optimization

This is a small v1 product.

## Target User

A non-technical marketer.

Users should be able to understand funnel performance without needing analytics expertise.

The UI should highlight important information instead of requiring users to calculate metrics themselves.

## Core Features

### Campaign List

Display all campaigns.

For each campaign show:

- Campaign name
- Device type
- Overall conversion rate
- Number of steps

Allow selecting a campaign.

### Campaign Details

Display:

- Funnel steps
- Views
- Proceeds
- Step conversion rate
- Step drop-off rate

Users should immediately understand how users move through the funnel.

### Biggest Drop-off Detection

Calculate the worst-performing step.

Display a clear insight such as:

"Biggest drop-off: Email Capture (73.4% drop-off)"

The problematic step should also be visually highlighted.

### Insights Panel

Generate simple rule-based recommendations.

Examples:

- High drop-off on email step → simplify the form
- Large drop-off on teaser step → improve the value proposition
- High conversion across all steps → campaign is performing well

Recommendations should be deterministic and based on funnel metrics.

No AI model integration is required.

## UI Guidelines

Use Material UI components whenever possible.

Preferred components:

- AppBar
- Drawer (optional)
- Card
- Paper
- Table
- Chip
- Alert
- Accordion
- LinearProgress

Avoid excessive colors.

Use visual hierarchy instead of decoration.

The most important information should be visible without scrolling.

## Suggested Structure

src/
├── components/
│ ├── CampaignList
│ ├── CampaignCard
│ ├── FunnelView
│ ├── FunnelStepCard
│ ├── InsightPanel
│ └── MetricsSummary
│
├── pages/
│ ├── CampaignsPage
│ └── CampaignDetailsPage
│
├── services/
│ └── campaignService
│
├── utils/
│ ├── funnelCalculations
│ └── insightGenerator
│
├── router/
│
├── types/
│
└── data/

## Code Expectations

Prefer:

- Composition API
- script setup
- Strong TypeScript typing
- Small reusable components
- Computed properties over unnecessary state
- Clear naming

Avoid:

- Any
- Large components
- Business logic inside templates
- Hardcoded duplicated calculations
