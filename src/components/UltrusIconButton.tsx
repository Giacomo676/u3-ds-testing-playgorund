import IconButton, {
  type IconButtonProps,
} from '@mui/material/IconButton'

import { UltrusIcon } from '../icons/UltrusIcon'
import type { MaterialSymbolName } from '../icons/materialSymbolNames'

export type UltrusIconButtonVariant =
  | 'solid'
  | 'minimal'

export interface UltrusIconButtonProps
  extends Omit<
    IconButtonProps,
    | 'children'
    | 'color'
    | 'disableRipple'
  > {
  /**
   * Approved ULTRUS Material Symbol.
   */
  icon: MaterialSymbolName

  /**
   * ULTRUS Icon Button treatment.
   */
  variant?: UltrusIconButtonVariant

  /**
   * Icon-only buttons must always
   * have an accessible name.
   */
  'aria-label': string
}

export function UltrusIconButton({
  icon,
  variant = 'solid',
  size = 'medium',
  ...props
}: UltrusIconButtonProps) {
  return (
    <IconButton
      size={size}
      data-variant={variant}
      {...props}
    >
      <UltrusIcon name={icon} />
    </IconButton>
  )
}