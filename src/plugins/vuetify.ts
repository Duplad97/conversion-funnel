import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  defaults: {
    VCard: {
      rounded: 'lg',
      elevation: 0,
      border: 'sm',
    },
    VAlert: {
      rounded: 'lg',
      border: 'start',
      variant: 'tonal',
    },
    VChip: {
      rounded: 'pill',
    },
  },
  theme: {
    defaultTheme: 'funnelTheme',
    themes: {
      funnelTheme: {
        dark: false,
        colors: {
          primary: '#0b7285',
          secondary: '#334155',
          warning: '#b45309',
          info: '#1d4ed8',
          success: '#0f766e',
          error: '#b91c1c',
          background: '#f3f6fb',
          surface: '#ffffff',
          'surface-variant': '#e8eef5',
        },
      },
    },
  },
})
