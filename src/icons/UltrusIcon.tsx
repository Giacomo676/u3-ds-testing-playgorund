import Icon, { type IconProps } from '@mui/material/Icon'
import type { MaterialSymbolName } from './materialSymbolNames'

interface UltrusIconProps
  extends Omit<IconProps, 'children' | 'baseClassName'> {
  name: MaterialSymbolName
}

export function UltrusIcon({
  name,
  ...props
}: UltrusIconProps) {
  return (
    <Icon
      aria-hidden="true"
      {...props}
    >
      {name}
    </Icon>
  )
}