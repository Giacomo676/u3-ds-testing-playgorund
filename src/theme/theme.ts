import { buttonClasses } from '@mui/material/Button'
import { createTheme } from '@mui/material/styles'

import { designSystemConfig } from './config'
import { semanticColors } from './semanticColors'
import { radius } from './shape'
import { spacing } from './spacing'
import {
  fontFamilies,
  typographyTokens,
} from './typography'

/**
 * ULTRUS / MUI spacing
 *
 * Preserves MUI's standard 8px spacing factor,
 * but outputs scalable rem values.
 *
 * Examples:
 *
 * theme.spacing(0.25) → 0.125rem → 2px
 * theme.spacing(0.5)  → 0.25rem  → 4px
 * theme.spacing(1)    → 0.5rem   → 8px
 * theme.spacing(2)    → 1rem     → 16px
 * theme.spacing(3)    → 1.5rem   → 24px
 * theme.spacing(4)    → 2rem     → 32px
 */
const muiSpacing = (factor: number) =>
  `${factor * 0.5}rem`

export const theme = createTheme({
  cssVariables: {
    cssVarPrefix: 'ultrus',
    colorSchemeSelector: 'class',
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main:
            semanticColors.light.button.contained.default,

          dark:
            semanticColors.light.button.contained.hover,

          contrastText:
            semanticColors.light.button.contained.foreground,
        },

        error: {
          main:
            semanticColors.light.button.destructive.foreground,

          dark:
            semanticColors.light.button.destructive.pressedForeground,

          contrastText:
            semanticColors.light.button.destructive.hoverForeground,
        },

        action: {
          hover:
            semanticColors.light.button.outlined.hoverBackground,

          disabled:
            semanticColors.light.button.disabled.foreground,

          disabledBackground:
            semanticColors.light.button.disabled.background,
        },

        text: {
          primary:
            semanticColors.light.text.primary,

          secondary:
            semanticColors.light.text.secondary,
        },

        background: {
          default:
            semanticColors.light.background.default,

          paper:
            semanticColors.light.background.surface,
        },
      },
    },

    dark: {
      palette: {
        primary: {
          main:
            semanticColors.dark.button.contained.default,

          dark:
            semanticColors.dark.button.contained.hover,

          contrastText:
            semanticColors.dark.button.contained.foreground,
        },

        error: {
          main:
            semanticColors.dark.button.destructive.foreground,

          dark:
            semanticColors.dark.button.destructive.pressedForeground,

          contrastText:
            semanticColors.dark.button.destructive.hoverForeground,
        },

        action: {
          hover:
            semanticColors.dark.button.outlined.hoverBackground,

          disabled:
            semanticColors.dark.button.disabled.foreground,

          disabledBackground:
            semanticColors.dark.button.disabled.background,
        },

        text: {
          primary:
            semanticColors.dark.text.primary,

          secondary:
            semanticColors.dark.text.secondary,
        },

        background: {
          default:
            semanticColors.dark.background.default,

          paper:
            semanticColors.dark.background.surface,
        },
      },
    },
  },

  /**
   * MUI's normal 8px spacing system is retained,
   * but expressed in rem.
   */
  spacing: muiSpacing,

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
      fontWeight: 500,
    },
  },

  /**
   * MUI expects its base shape value as a number.
   * ULTRUS component radius tokens live in shape.ts.
   */
  shape: {
    borderRadius: 8,
  },

  components: {
    /**
     * Global interaction behaviour.
     *
     * Ripple is controlled from:
     * src/theme/config.ts
     */
    MuiButtonBase: {
      defaultProps: {
        disableRipple:
          !designSystemConfig.interactions.ripple,
      },
    },

    /**
     * Global ULTRUS Icon configuration.
     *
     * Material Symbols Rounded
     * Fill: 0
     * Weight: 200
     * Grade: 0
     * Optical size: 24
     */
    MuiIcon: {
      defaultProps: {
        baseClassName: 'material-symbols-rounded',
        fontSize: 'medium',
      },

      styleOverrides: {
        root: {
          fontFamily:
            '"Material Symbols Rounded"',

          fontVariationSettings:
            "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",

          fontSize: '1.5rem',
          width: '1.5rem',
          height: '1.5rem',

          lineHeight: 1,
          flexShrink: 0,
        },
      },
    },

    /**
     * Global ULTRUS Button configuration.
     *
     * Enabled  → no elevation
     * Hover    → Elevation 7
     * Pressed  → no elevation
     * Disabled → no elevation
     * Loading  → no elevation
     */
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: radius.full,

          /**
           * Global elevation behaviour.
           */
          boxShadow: 'none',

          '&:hover': {
            boxShadow: theme.shadows[7],
          },

          '&:active': {
            boxShadow: 'none',
          },

          [`&.${buttonClasses.disabled}`]: {
            boxShadow: 'none',
          },

          [`&.${buttonClasses.loading}`]: {
            boxShadow: 'none',
          },

          /**
           * Global keyboard focus.
           *
           * Fine visual strokes remain px-based.
           */
          '&.Mui-focusVisible, &:focus-visible': {
            outline:
              `2px dashed ${semanticColors.light.button.focus.ring}`,

            outlineOffset: '3px',
          },

          /**
           * CONTAINED
           */
          [`&.${buttonClasses.contained}.${buttonClasses.colorPrimary}`]: {
            backgroundColor:
              semanticColors.light.button.contained.default,

            color:
              semanticColors.light.button.contained.foreground,

            '&:hover': {
              backgroundColor:
                semanticColors.light.button.contained.hover,
            },

            '&:active': {
              backgroundColor:
                semanticColors.light.button.contained.pressed,
            },

            [`&.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.disabled.foreground,

              backgroundColor:
                semanticColors.light.button.disabled.background,
            },

            /**
             * Loading is functionally disabled,
             * but visually retains Enabled styling.
             */
            [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.contained.foreground,

              backgroundColor:
                semanticColors.light.button.contained.default,

              boxShadow: 'none',
            },
          },

          /**
           * OUTLINED
           */
          [`&.${buttonClasses.outlined}.${buttonClasses.colorPrimary}`]: {
            color:
              semanticColors.light.button.outlined.foreground,

            borderColor:
              semanticColors.light.button.outlined.border,

            '&:hover': {
              color:
                semanticColors.light.button.outlined.foreground,

              borderColor:
                semanticColors.light.button.outlined.border,

              backgroundColor:
                semanticColors.light.button.outlined.hoverBackground,
            },

            '&:active': {
              color:
                semanticColors.light.button.outlined.pressedForeground,

              borderColor:
                semanticColors.light.button.outlined.pressedForeground,

              backgroundColor: 'transparent',
            },

            [`&.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.disabled.foreground,

              borderColor:
                semanticColors.light.button.disabled.border,

              backgroundColor:
                semanticColors.light.button.disabled.background,
            },

            [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.outlined.foreground,

              borderColor:
                semanticColors.light.button.outlined.border,

              backgroundColor: 'transparent',

              boxShadow: 'none',
            },
          },

          /**
           * TEXT
           *
           * Transparent in interactive states
           * except Disabled.
           */
          [`&.${buttonClasses.text}.${buttonClasses.colorPrimary}`]: {
            color:
              semanticColors.light.button.text.foreground,

            backgroundColor:
              semanticColors.light.button.text.background,

            '&:hover': {
              color:
                semanticColors.light.button.text.foreground,

              backgroundColor:
                semanticColors.light.button.text.hoverBackground,
            },

            '&:active': {
              color:
                semanticColors.light.button.text.pressedForeground,

              backgroundColor:
                semanticColors.light.button.text.pressedBackground,
            },

            [`&.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.disabled.foreground,

              backgroundColor:
                semanticColors.light.button.disabled.background,
            },

            [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.text.foreground,

              backgroundColor:
                semanticColors.light.button.text.background,

              boxShadow: 'none',
            },
          },

          /**
           * DESTRUCTIVE
           *
           * UltrusButton maps:
           * destructive → outlined + error
           */
          [`&.${buttonClasses.outlined}.${buttonClasses.colorError}`]: {
            color:
              semanticColors.light.button.destructive.foreground,

            borderColor:
              semanticColors.light.button.destructive.border,

            '&:hover': {
              color:
                semanticColors.light.button.destructive.hoverForeground,

              borderColor:
                semanticColors.light.button.destructive.hoverBackground,

              backgroundColor:
                semanticColors.light.button.destructive.hoverBackground,
            },

            '&:active': {
              color:
                semanticColors.light.button.destructive.pressedForeground,

              borderColor:
                semanticColors.light.button.destructive.pressedForeground,

              backgroundColor: 'transparent',
            },

            [`&.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.disabled.foreground,

              borderColor:
                semanticColors.light.button.disabled.border,

              backgroundColor:
                semanticColors.light.button.disabled.background,
            },

            [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
              color:
                semanticColors.light.button.destructive.foreground,

              borderColor:
                semanticColors.light.button.destructive.border,

              backgroundColor: 'transparent',

              boxShadow: 'none',
            },
          },

          /**
           * DARK MODE
           */
          ...theme.applyStyles('dark', {
            '&.Mui-focusVisible, &:focus-visible': {
              outline:
                `2px dashed ${semanticColors.dark.button.focus.ring}`,
            },

            /**
             * Contained — Dark
             */
            [`&.${buttonClasses.contained}.${buttonClasses.colorPrimary}`]: {
              backgroundColor:
                semanticColors.dark.button.contained.default,

              color:
                semanticColors.dark.button.contained.foreground,

              '&:hover': {
                backgroundColor:
                  semanticColors.dark.button.contained.hover,
              },

              '&:active': {
                backgroundColor:
                  semanticColors.dark.button.contained.pressed,
              },

              [`&.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.disabled.foreground,

                backgroundColor:
                  semanticColors.dark.button.disabled.background,
              },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.contained.foreground,

                backgroundColor:
                  semanticColors.dark.button.contained.default,

                boxShadow: 'none',
              },
            },

            /**
             * Outlined — Dark
             */
            [`&.${buttonClasses.outlined}.${buttonClasses.colorPrimary}`]: {
              color:
                semanticColors.dark.button.outlined.foreground,

              borderColor:
                semanticColors.dark.button.outlined.border,

              '&:hover': {
                color:
                  semanticColors.dark.button.outlined.foreground,

                borderColor:
                  semanticColors.dark.button.outlined.border,

                backgroundColor:
                  semanticColors.dark.button.outlined.hoverBackground,
              },

              '&:active': {
                color:
                  semanticColors.dark.button.outlined.pressedForeground,

                borderColor:
                  semanticColors.dark.button.outlined.pressedForeground,

                backgroundColor: 'transparent',
              },

              [`&.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.disabled.foreground,

                borderColor:
                  semanticColors.dark.button.disabled.border,

                backgroundColor:
                  semanticColors.dark.button.disabled.background,
              },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.outlined.foreground,

                borderColor:
                  semanticColors.dark.button.outlined.border,

                backgroundColor: 'transparent',

                boxShadow: 'none',
              },
            },

            /**
             * Text — Dark
             */
            [`&.${buttonClasses.text}.${buttonClasses.colorPrimary}`]: {
              color:
                semanticColors.dark.button.text.foreground,

              backgroundColor:
                semanticColors.dark.button.text.background,

              '&:hover': {
                color:
                  semanticColors.dark.button.text.foreground,

                backgroundColor:
                  semanticColors.dark.button.text.hoverBackground,
              },

              '&:active': {
                color:
                  semanticColors.dark.button.text.pressedForeground,

                backgroundColor:
                  semanticColors.dark.button.text.pressedBackground,
              },

              [`&.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.disabled.foreground,

                backgroundColor:
                  semanticColors.dark.button.disabled.background,
              },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.text.foreground,

                backgroundColor:
                  semanticColors.dark.button.text.background,

                boxShadow: 'none',
              },
            },

            /**
             * Destructive — Dark
             */
            [`&.${buttonClasses.outlined}.${buttonClasses.colorError}`]: {
              color:
                semanticColors.dark.button.destructive.foreground,

              borderColor:
                semanticColors.dark.button.destructive.border,

              '&:hover': {
                color:
                  semanticColors.dark.button.destructive.hoverForeground,

                borderColor:
                  semanticColors.dark.button.destructive.hoverBackground,

                backgroundColor:
                  semanticColors.dark.button.destructive.hoverBackground,
              },

              '&:active': {
                color:
                  semanticColors.dark.button.destructive.pressedForeground,

                borderColor:
                  semanticColors.dark.button.destructive.pressedForeground,

                backgroundColor: 'transparent',
              },

              [`&.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.disabled.foreground,

                borderColor:
                  semanticColors.dark.button.disabled.border,

                backgroundColor:
                  semanticColors.dark.button.disabled.background,
              },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]: {
                color:
                  semanticColors.dark.button.destructive.foreground,

                borderColor:
                  semanticColors.dark.button.destructive.border,

                backgroundColor: 'transparent',

                boxShadow: 'none',
              },
            },
          }),
        }),

        /**
         * Large
         *
         * 44px → 2.75rem
         * 16px / 28px → 1rem / 1.75rem
         */
        sizeLarge: {
          height: '2.75rem',
          fontSize: '1rem',
          lineHeight: '1.75rem',
        },

        /**
         * Medium
         *
         * 40px → 2.5rem
         * 14px / 24px → 0.875rem / 1.5rem
         */
        sizeMedium: {
          height: '2.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
        },

        /**
         * Small
         *
         * 32px → 2rem
         * 12px / 24px → 0.75rem / 1.5rem
         */
        sizeSmall: {
          height: '2rem',
          fontSize: '0.75rem',
          lineHeight: '1.5rem',
        },

        /**
         * Start icon
         *
         * ULTRUS spacing token:
         * spacing[4] → 0.25rem → 4px
         */
        startIcon: {
          marginRight: spacing[4],

          '& > *:nth-of-type(1)': {
            fontSize: '1.5rem',
            width: '1.5rem',
            height: '1.5rem',
          },
        },

        /**
         * End icon
         *
         * ULTRUS spacing token:
         * spacing[4] → 0.25rem → 4px
         */
        endIcon: {
          marginLeft: spacing[4],

          '& > *:nth-of-type(1)': {
            fontSize: '1.5rem',
            width: '1.5rem',
            height: '1.5rem',
          },
        },

        /**
         * MUI CircularProgress loading indicator
         * inherits the Button foreground colour.
         */
        loadingIndicator: {
          color: 'inherit',
        },
      },
    },
  },
})