import { describe, expect, it } from 'vitest'

import InsightPanel from '@/components/InsightPanel.vue'
import type { Insight } from '@/types/campaign'
import { mountWithVuetify } from '@/test/testUtils'

const insights: Insight[] = [
  {
    id: 'ins_1',
    severity: 'warning',
    title: 'High drop-off on email step',
    message: 'Consider simplifying the email form.',
  },
  {
    id: 'ins_2',
    severity: 'info',
    title: 'Traffic volume is limited',
    message: 'Interpret results with caution.',
  },
  {
    id: 'ins_3',
    severity: 'success',
    title: 'Campaign is performing well',
    message: 'Conversion is stable across all steps.',
  },
]

describe('InsightPanel', () => {
  it('renders all insights with title and message', () => {
    const wrapper = mountWithVuetify(InsightPanel, {
      props: { insights },
    })

    expect(wrapper.findAll('.v-alert')).toHaveLength(3)
    expect(wrapper.text()).toContain('High drop-off on email step')
    expect(wrapper.text()).toContain('Traffic volume is limited')
    expect(wrapper.text()).toContain('Campaign is performing well')
  })
})
