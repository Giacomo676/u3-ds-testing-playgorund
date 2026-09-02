import { materialSymbolNames } from './materialSymbolNames'

const iconNames = materialSymbolNames.join(',')

export const materialSymbolsStylesheetUrl =
  `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:wght@200&icon_names=${iconNames}&display=block`

export function loadMaterialSymbols() {
  if (typeof document === 'undefined') {
    return
  }

  const existingLink = document.querySelector(
    'link[data-ultrus-material-symbols]'
  )

  if (existingLink) {
    return
  }

  const link = document.createElement('link')

  link.rel = 'stylesheet'
  link.href = materialSymbolsStylesheetUrl
  link.dataset.ultrusMaterialSymbols = 'true'

  document.head.appendChild(link)
}