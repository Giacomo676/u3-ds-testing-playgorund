import Button, { type ButtonProps } from '@mui/material/Button'

import type { MaterialSymbolName } from '../icons/materialSymbolNames'
import { UltrusIcon } from '../icons/UltrusIcon'

export type UltrusButtonVariant =
  | 'contained'
  | 'outlined'
  | 'text'
  | 'destructive'

export interface UltrusButtonProps
  extends Omit<
    ButtonProps,
    | 'variant'
    | 'color'
    | 'startIcon'
    | 'endIcon'
    | 'disableRipple'
    | 'disableElevation'
    | 'loadingPosition'
    | 'loadingIndicator'
  > {
  variant?: UltrusButtonVariant
  startIcon?: MaterialSymbolName
  endIcon?: MaterialSymbolName
}

export function UltrusButton({
  variant = 'contained',
  startIcon,
  endIcon,
  loading = false,
  children,
  ...props
}: UltrusButtonProps) {
  const muiVariant: ButtonProps['variant'] =
    variant === 'destructive'
      ? 'outlined'
      : variant

  const muiColor: ButtonProps['color'] =
    variant === 'destructive'
      ? 'error'
      : 'primary'

  const hasIcon = Boolean(startIcon || endIcon)

  /**
   * ULTRUS loading behaviour:
   *
   * Start icon → spinner replaces start icon + label
   * End icon   → label + spinner replaces end icon
   * No icon    → centred spinner only
   */
  const loadingPosition: ButtonProps['loadingPosition'] =
    startIcon
      ? 'start'
      : endIcon
        ? 'end'
        : 'center'

  /**
   * For a Button without an icon we retain the label
   * in the layout so the Button keeps its original width,
   * but visually hide it while loading.
   *
   * Opacity is used rather than display:none so the
   * accessible Button label remains available.
   */
  const hideLabel =
    loading && !hasIcon

  return (
    <Button
      variant={muiVariant}
      color={muiColor}
      loading={loading}
      loadingPosition={loadingPosition}
      startIcon={
        startIcon
          ? <UltrusIcon name={startIcon} />
          : undefined
      }
      endIcon={
        endIcon
          ? <UltrusIcon name={endIcon} />
          : undefined
      }
      {...props}
    >
      <span
        style={{
          opacity: hideLabel ? 0 : 1,
        }}
      >
        {children}
      </span>
    </Button>
  )
}