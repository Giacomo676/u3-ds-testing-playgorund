import type { Preview } from '@storybook/react-vite'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from '../src/theme/theme'
import '../src/index.css'

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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview