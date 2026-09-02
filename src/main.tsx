import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import './index.css'
import App from './App.tsx'
import { loadMaterialSymbols } from './icons/loadMaterialSymbols'
import { theme } from './theme/theme'

loadMaterialSymbols()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)