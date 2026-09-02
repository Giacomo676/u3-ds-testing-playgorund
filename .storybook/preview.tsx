import type { Preview } from '@storybook/react-vite'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { loadMaterialSymbols } from '../src/icons/loadMaterialSymbols'
import { theme } from '../src/theme/theme'
import '../src/index.css'

loadMaterialSymbols()

const ultrusViewports = {
  mobile: {
    name: 'ULTRUS Mobile',
    styles: {
      width: '390px',
      height: '844px',
    },
    type: 'mobile',
  },

  tablet: {
    name: 'ULTRUS Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },

  desktop: {
    name: 'ULTRUS Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
    type: 'desktop',
  },
}

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    viewport: {
      options: ultrusViewports,
    },

    options: {
      storySort: {
        order: [
          'Example',

          'Foundations',
          [
            'Typography',
            'Colors',
            'Shape',
            'Icons',
            '*',
          ],

          'Components',
          [
            'Button',
            'Icon Button',
            'Select',
            '*',
          ],

          'MUI',

          '*',
        ],
      },
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview