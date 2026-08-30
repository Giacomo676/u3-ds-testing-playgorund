import { createTheme } from '@mui/material/styles'

import { semanticColors } from './semanticColors'
import { radius } from './shape'
import {
  fontFamilies,
  typographyTokens,
} from './typography'

export const theme = createTheme({
  cssVariables: {
    cssVarPrefix: 'ultrus',
    colorSchemeSelector: 'class',
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: semanticColors.light.action.primary.default,
          dark: semanticColors.light.action.primary.hover,
          contrastText: semanticColors.light.action.primary.foreground,
        },

        text: {
          primary: semanticColors.light.text.primary,
          secondary: semanticColors.light.text.secondary,
        },

        background: {
          default: semanticColors.light.background.default,
          paper: semanticColors.light.background.surface,
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main: semanticColors.dark.action.primary.default,
          dark: semanticColors.dark.action.primary.hover,
          contrastText: semanticColors.dark.action.primary.foreground,
        },

        text: {
          primary: semanticColors.dark.text.primary,
          secondary: semanticColors.dark.text.secondary,
        },

        background: {
          default: semanticColors.dark.background.default,
          paper: semanticColors.dark.background.surface,
        },
      },
    },
  },

  typography: {
    fontFamily: fontFamilies.primary,

    h1: {
      ...typographyTokens.h1.mobile,

      '@media (min-width:600px)': {
        ...typographyTokens.h1.tablet,
      },

      '@media (min-width:900px)': {
        ...typographyTokens.h1.desktop,
      },
    },

    h2: {
      ...typographyTokens.h2.mobile,

      '@media (min-width:600px)': {
        ...typographyTokens.h2.tablet,
      },

      '@media (min-width:900px)': {
        ...typographyTokens.h2.desktop,
      },
    },

    h3: {
      ...typographyTokens.h3.mobile,

      '@media (min-width:600px)': {
        ...typographyTokens.h3.tabletDesktop,
      },
    },

    h4: typographyTokens.h4,
    h5: typographyTokens.h5,
    h6: typographyTokens.h6,

    body1: typographyTokens.body1,
    body2: typographyTokens.body2,

    subtitle1: typographyTokens.subtitle1,
    subtitle2: typographyTokens.subtitle2,

    overline: typographyTokens.overline,
    caption: typographyTokens.caption,

    button: {
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiIcon: {
      defaultProps: {
        baseClassName: 'material-symbols-rounded',
        fontSize: 'medium',
      },

      styleOverrides: {
        root: {
          fontFamily: '"Material Symbols Rounded"',
          fontVariationSettings:
            "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",

          fontSize: '24px',
          width: '24px',
          height: '24px',
          lineHeight: 1,
          flexShrink: 0,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: radius.full,
        },

        startIcon: {
          '& > *:nth-of-type(1)': {
            fontSize: '24px',
            width: '24px',
            height: '24px',
          },
        },

        endIcon: {
          '& > *:nth-of-type(1)': {
            fontSize: '24px',
            width: '24px',
            height: '24px',
          },
        },
      },
    },
  },
})