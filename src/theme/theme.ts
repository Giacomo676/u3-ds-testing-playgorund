import { createTheme } from '@mui/material/styles'
import { buttonClasses } from '@mui/material/Button'

import { designSystemConfig } from './config'
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

  shape: {
    borderRadius: 8,
  },

  components: {
    /**
     * Global interaction behaviour.
     */
    MuiButtonBase: {
      defaultProps: {
        disableRipple:
          !designSystemConfig.interactions.ripple,
      },
    },

    /**
     * Global ULTRUS Icon configuration.
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

          fontSize: '24px',
          width: '24px',
          height: '24px',

          lineHeight: 1,
          flexShrink: 0,
        },
      },
    },

    /**
     * Global ULTRUS Button configuration.
     */
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: radius.full,

          /**
           * Elevation
           *
           * Enabled  → none
           * Hover    → Elevation 7
           * Pressed  → none
           * Disabled → none
           * Loading  → none
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
             * Loading:
             * functionally disabled,
             * visually Enabled.
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

            /**
             * Loading:
             * functionally disabled,
             * visually Enabled.
             */
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

            /**
             * Loading:
             * functionally disabled,
             * visually Enabled.
             */
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
           * destructive
           * →
           * outlined + error
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

            /**
             * Loading:
             * functionally disabled,
             * visually Enabled.
             */
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
         */
        sizeLarge: {
          height: '44px',
          fontSize: '1rem',
          lineHeight: '1.75rem',
        },

        /**
         * Medium
         */
        sizeMedium: {
          height: '40px',
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
        },

        /**
         * Small
         */
        sizeSmall: {
          height: '32px',
          fontSize: '0.75rem',
          lineHeight: '1.5rem',
        },

        /**
         * Normal ULTRUS icons.
         */
       startIcon: {
        marginRight: '4px',

        '& > *:nth-of-type(1)': {
          fontSize: '24px',
          width: '24px',
          height: '24px',
        },
      },

        endIcon: {
          marginLeft: '4px',

        '& > *:nth-of-type(1)': {
          fontSize: '24px',
          width: '24px',
          height: '24px',
        },
      },

        /**
         * MUI's loading indicator uses
         * CircularProgress color="inherit".
         */
        loadingIndicator: {
          color: 'inherit',
        },
      },
    },
  },
})