export const materialSymbolNames = [
  'add',
  'arrow_back',
  'arrow_forward',
  'check',
  'close',
  'delete',
  'download',
  'edit',
  'info',
  'menu',
  'search',
  'settings',
  'upload',
  'warning',
] as const

export type MaterialSymbolName =
  (typeof materialSymbolNames)[number]