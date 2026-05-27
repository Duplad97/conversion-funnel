import { mount, type MountingOptions } from '@vue/test-utils'

export const mountWithVuetify = <T>(component: T, options?: MountingOptions<any>) => {
  return mount(component as any, {
    ...options,
    global: {
      ...options?.global,
      stubs: {
        'v-card': { template: '<div class="v-card"><slot /></div>' },
        'v-card-title': { template: '<div class="v-card-title"><slot /></div>' },
        'v-card-text': { template: '<div class="v-card-text"><slot /></div>' },
        'v-chip': { template: '<span class="v-chip"><slot /></span>' },
        'v-row': { template: '<div class="v-row"><slot /></div>' },
        'v-col': { template: '<div class="v-col"><slot /></div>' },
        'v-alert': { template: '<div class="v-alert"><slot /></div>' },
        'v-progress-linear': { template: '<div class="v-progress-linear" />' },
        ...(options?.global?.stubs ?? {}),
      },
    },
  })
}
