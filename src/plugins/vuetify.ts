import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'funnelTheme',
    themes: {
      funnelTheme: {
        dark: false,
        colors: {
          primary: '#0f6f63',
          secondary: '#394d61',
          warning: '#b86f00',
          info: '#2563eb',
          success: '#1f8a70',
          background: '#f4f6f8',
          surface: '#ffffff',
        },
      },
    },
  },
})
