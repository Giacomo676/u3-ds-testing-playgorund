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
            semanticColors.light.button.contained
              .default,

          dark:
            semanticColors.light.button.contained
              .hover,

          contrastText:
            semanticColors.light.button.contained
              .foreground,
        },

        error: {
          main:
            semanticColors.light.button.destructive
              .foreground,

          dark:
            semanticColors.light.button.destructive
              .pressedForeground,

          contrastText:
            semanticColors.light.button.destructive
              .hoverForeground,
        },

        action: {
          hover:
            semanticColors.light.button.outlined
              .hoverBackground,

          disabled:
            semanticColors.light.button.disabled
              .foreground,

          disabledBackground:
            semanticColors.light.button.disabled
              .background,
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
            semanticColors.dark.button.contained
              .default,

          dark:
            semanticColors.dark.button.contained
              .hover,

          contrastText:
            semanticColors.dark.button.contained
              .foreground,
        },

        error: {
          main:
            semanticColors.dark.button.destructive
              .foreground,

          dark:
            semanticColors.dark.button.destructive
              .pressedForeground,

          contrastText:
            semanticColors.dark.button.destructive
              .hoverForeground,
        },

        action: {
          hover:
            semanticColors.dark.button.outlined
              .hoverBackground,

          disabled:
            semanticColors.dark.button.disabled
              .foreground,

          disabledBackground:
            semanticColors.dark.button.disabled
              .background,
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

    subtitle1:
      typographyTokens.subtitle1,

    subtitle2:
      typographyTokens.subtitle2,

    overline:
      typographyTokens.overline,

    caption:
      typographyTokens.caption,

    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple:
          !designSystemConfig.interactions.ripple,
      },
    },

    /**
     * MATERIAL SYMBOLS
     */
    MuiIcon: {
      defaultProps: {
        baseClassName:
          'material-symbols-rounded',

        fontSize: 'medium',
      },

      styleOverrides: {
        root: {
          fontFamily:
            '"Material Symbols Rounded"',

          fontVariationSettings:
            "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24",

          fontFeatureSettings:
            '"liga"',

          WebkitFontFeatureSettings:
            '"liga"',

          fontSize: '1.5rem',

          width: '1.5rem',
          height: '1.5rem',

          display: 'inline-flex',

          alignItems: 'center',
          justifyContent: 'center',

          verticalAlign: 'middle',

          lineHeight: 1,

          whiteSpace: 'nowrap',

          overflow: 'visible',

          flexShrink: 0,
        },
      },
    },

    /**
     * ICON BUTTON
     */
    MuiIconButton: {
      styleOverrides: {
        root: ({
          theme,
          ownerState,
        }) => {
          const isLarge =
            ownerState.size === 'large'

          const isSmall =
            ownerState.size === 'small'

          const sizeStyles =
            isLarge
              ? {
                  width: '2.75rem',
                  height: '2.75rem',
                }
              : isSmall
                ? {
                    width: '2rem',
                    height: '2rem',
                  }
                : {
                    width: '2.5rem',
                    height: '2.5rem',
                  }

          return {
            ...sizeStyles,

            minWidth: 0,
            minHeight: 0,

            padding: 0,

            boxSizing:
              'border-box',

            borderRadius:
              radius.full,

            display:
              'inline-flex',

            alignItems:
              'center',

            justifyContent:
              'center',

            position:
              'relative',

            overflow:
              'visible',

            lineHeight: 1,

            boxShadow:
              'none',

            transition:
              theme.transitions.create(
                [
                  'background-color',
                  'border-color',
                  'box-shadow',
                  'color',
                ],
                {
                  duration:
                    theme.transitions
                      .duration.shorter,
                },
              ),

            /**
             * Icon dimensions
             *
             * Large  → 24px
             * Medium → 24px
             * Small  → 16px
             *
             * Material Symbols sit very slightly
             * high at 16px, so Small receives a
             * 1px optical vertical correction.
             */
            '& .MuiIcon-root': {
              fontSize:
                isSmall
                  ? '1rem'
                  : '1.5rem',

              width:
                isSmall
                  ? '1rem'
                  : '1.5rem',

              height:
                isSmall
                  ? '1rem'
                  : '1.5rem',

              display:
                'inline-flex',

              alignItems:
                'center',

              justifyContent:
                'center',

              lineHeight: 1,

              overflow:
                'visible',

              transform:
                isSmall
                  ? 'translateY(0.0625rem)'
                  : 'none',
            },

            /**
             * SOLID
             */
            '&[data-variant="solid"]':
              {
                color:
                  semanticColors.light
                    .iconButton.solid
                    .enabled.foreground,

                backgroundColor:
                  semanticColors.light
                    .iconButton.solid
                    .enabled.background,

                border:
                  `1px solid ${semanticColors.light.iconButton.solid.enabled.border}`,

                '&:hover': {
                  color:
                    semanticColors.light
                      .iconButton.solid
                      .hovered.foreground,

                  backgroundColor:
                    semanticColors.light
                      .iconButton.solid
                      .hovered.background,

                  borderColor:
                    semanticColors.light
                      .iconButton.solid
                      .hovered.border,

                  boxShadow:
                    theme.shadows[7],
                },

                '&:active': {
                  color:
                    semanticColors.light
                      .iconButton.solid
                      .pressed.foreground,

                  backgroundColor:
                    semanticColors.light
                      .iconButton.solid
                      .pressed.background,

                  borderColor:
                    semanticColors.light
                      .iconButton.solid
                      .pressed.border,

                  boxShadow: 'none',
                },

                '&.Mui-focusVisible, &:focus-visible':
                  {
                    color:
                      semanticColors.light
                        .iconButton.solid
                        .focused.foreground,

                    backgroundColor:
                      semanticColors.light
                        .iconButton.solid
                        .focused.background,

                    borderColor:
                      semanticColors.light
                        .iconButton.solid
                        .focused.border,

                    outline:
                      `2px dashed ${semanticColors.light.iconButton.solid.focused.outline}`,

                    outlineOffset:
                      '3px',

                    boxShadow:
                      'none',

                    '&:hover': {
                      boxShadow:
                        'none',
                    },
                  },

                '&.Mui-disabled': {
                  color:
                    semanticColors.light
                      .iconButton.solid
                      .disabled.foreground,

                  backgroundColor:
                    semanticColors.light
                      .iconButton.solid
                      .disabled.background,

                  borderColor:
                    semanticColors.light
                      .iconButton.solid
                      .disabled.border,

                  boxShadow:
                    'none',
                },
              },

            /**
             * MINIMAL
             */
            '&[data-variant="minimal"]':
              {
                color:
                  semanticColors.light
                    .iconButton.minimal
                    .enabled.foreground,

                backgroundColor:
                  semanticColors.light
                    .iconButton.minimal
                    .enabled.background,

                border:
                  `1px solid ${semanticColors.light.iconButton.minimal.enabled.border}`,

                '&:hover': {
                  color:
                    semanticColors.light
                      .iconButton.minimal
                      .hovered.foreground,

                  backgroundColor:
                    semanticColors.light
                      .iconButton.minimal
                      .hovered.background,

                  borderColor:
                    semanticColors.light
                      .iconButton.minimal
                      .hovered.border,

                  boxShadow:
                    theme.shadows[7],
                },

                '&:active': {
                  color:
                    semanticColors.light
                      .iconButton.minimal
                      .pressed.foreground,

                  backgroundColor:
                    semanticColors.light
                      .iconButton.minimal
                      .pressed.background,

                  borderColor:
                    semanticColors.light
                      .iconButton.minimal
                      .pressed.border,

                  boxShadow:
                    'none',
                },

                '&.Mui-focusVisible, &:focus-visible':
                  {
                    color:
                      semanticColors.light
                        .iconButton.minimal
                        .focused.foreground,

                    backgroundColor:
                      semanticColors.light
                        .iconButton.minimal
                        .focused.background,

                    borderColor:
                      semanticColors.light
                        .iconButton.minimal
                        .focused.border,

                    outline:
                      `2px dashed ${semanticColors.light.iconButton.minimal.focused.outline}`,

                    outlineOffset:
                      '3px',

                    boxShadow:
                      'none',

                    '&:hover': {
                      boxShadow:
                        'none',
                    },
                  },

                '&.Mui-disabled': {
                  color:
                    semanticColors.light
                      .iconButton.minimal
                      .disabled.foreground,

                  backgroundColor:
                    semanticColors.light
                      .iconButton.minimal
                      .disabled.background,

                  borderColor:
                    semanticColors.light
                      .iconButton.minimal
                      .disabled.border,

                  boxShadow:
                    'none',
                },
              },

            /**
             * DARK MODE
             *
             * Temporary fallback until
             * Icon Button dark semantics
             * are defined in Figma.
             */
            ...theme.applyStyles(
              'dark',
              {
                '&[data-variant="solid"]':
                  {
                    color:
                      semanticColors.dark
                        .text.primary,

                    backgroundColor:
                      semanticColors.dark
                        .background.surface,

                    borderColor:
                      semanticColors.dark
                        .button.disabled
                        .border,

                    '&:hover': {
                      color:
                        semanticColors.dark
                          .text.primary,

                      backgroundColor:
                        semanticColors.dark
                          .button.outlined
                          .hoverBackground,

                      borderColor:
                        semanticColors.dark
                          .button.disabled
                          .border,

                      boxShadow:
                        theme.shadows[7],
                    },

                    '&:active': {
                      color:
                        semanticColors.dark
                          .text.primary,

                      backgroundColor:
                        semanticColors.dark
                          .background
                          .surface,

                      boxShadow:
                        'none',
                    },

                    '&.Mui-focusVisible, &:focus-visible':
                      {
                        outline:
                          `2px dashed ${semanticColors.dark.button.focus.ring}`,

                        outlineOffset:
                          '3px',

                        boxShadow:
                          'none',
                      },

                    '&.Mui-disabled':
                      {
                        color:
                          semanticColors.dark
                            .button.disabled
                            .foreground,

                        backgroundColor:
                          semanticColors.dark
                            .button.disabled
                            .background,

                        borderColor:
                          semanticColors.dark
                            .button.disabled
                            .border,
                      },
                  },

                '&[data-variant="minimal"]':
                  {
                    color:
                      semanticColors.dark
                        .text.primary,

                    backgroundColor:
                      'transparent',

                    borderColor:
                      'transparent',

                    '&:hover': {
                      color:
                        semanticColors.dark
                          .text.primary,

                      backgroundColor:
                        semanticColors.dark
                          .button.outlined
                          .hoverBackground,

                      borderColor:
                        'transparent',

                      boxShadow:
                        theme.shadows[7],
                    },

                    '&:active': {
                      backgroundColor:
                        'transparent',

                      borderColor:
                        'transparent',

                      boxShadow:
                        'none',
                    },

                    '&.Mui-focusVisible, &:focus-visible':
                      {
                        outline:
                          `2px dashed ${semanticColors.dark.button.focus.ring}`,

                        outlineOffset:
                          '3px',

                        boxShadow:
                          'none',
                      },

                    '&.Mui-disabled':
                      {
                        color:
                          semanticColors.dark
                            .button.disabled
                            .foreground,

                        backgroundColor:
                          'transparent',

                        borderColor:
                          'transparent',
                      },
                  },
              },
            ),
          }
        },
      },
    },

    /**
     * BUTTON
     */
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius:
            radius.full,

          boxShadow:
            'none',

          '&:hover': {
            boxShadow:
              theme.shadows[7],
          },

          '&:active': {
            boxShadow:
              'none',
          },

          [`&.${buttonClasses.disabled}`]:
            {
              boxShadow:
                'none',
            },

          [`&.${buttonClasses.loading}`]:
            {
              boxShadow:
                'none',
            },

          '&.Mui-focusVisible, &:focus-visible':
            {
              outline:
                `2px dashed ${semanticColors.light.button.focus.ring}`,

              outlineOffset:
                '3px',

              boxShadow:
                'none',

              '&:hover': {
                boxShadow:
                  'none',
              },
            },

          [`&.${buttonClasses.contained}.${buttonClasses.colorPrimary}`]:
            {
              backgroundColor:
                semanticColors.light
                  .button.contained
                  .default,

              color:
                semanticColors.light
                  .button.contained
                  .foreground,

              '&:hover': {
                backgroundColor:
                  semanticColors.light
                    .button.contained
                    .hover,
              },

              '&:active': {
                backgroundColor:
                  semanticColors.light
                    .button.contained
                    .pressed,
              },

              [`&.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.disabled
                      .foreground,

                  backgroundColor:
                    semanticColors.light
                      .button.disabled
                      .background,
                },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.contained
                      .loading
                      .foreground,

                  backgroundColor:
                    semanticColors.light
                      .button.contained
                      .loading
                      .background,

                  boxShadow:
                    'none',
                },
            },

          [`&.${buttonClasses.outlined}.${buttonClasses.colorPrimary}`]:
            {
              color:
                semanticColors.light
                  .button.outlined
                  .foreground,

              borderColor:
                semanticColors.light
                  .button.outlined
                  .border,

              '&:hover': {
                color:
                  semanticColors.light
                    .button.outlined
                    .foreground,

                borderColor:
                  semanticColors.light
                    .button.outlined
                    .border,

                backgroundColor:
                  semanticColors.light
                    .button.outlined
                    .hoverBackground,
              },

              '&:active': {
                color:
                  semanticColors.light
                    .button.outlined
                    .pressedForeground,

                borderColor:
                  semanticColors.light
                    .button.outlined
                    .pressedForeground,

                backgroundColor:
                  'transparent',
              },

              [`&.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.disabled
                      .foreground,

                  borderColor:
                    semanticColors.light
                      .button.disabled
                      .border,

                  backgroundColor:
                    semanticColors.light
                      .button.disabled
                      .background,
                },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.outlined
                      .loading
                      .foreground,

                  borderColor:
                    semanticColors.light
                      .button.outlined
                      .loading.border,

                  backgroundColor:
                    semanticColors.light
                      .button.outlined
                      .loading.background,

                  boxShadow:
                    'none',
                },
            },

          [`&.${buttonClasses.text}.${buttonClasses.colorPrimary}`]:
            {
              color:
                semanticColors.light
                  .button.text
                  .foreground,

              backgroundColor:
                semanticColors.light
                  .button.text
                  .background,

              '&:hover': {
                color:
                  semanticColors.light
                    .button.text
                    .foreground,

                backgroundColor:
                  semanticColors.light
                    .button.text
                    .hoverBackground,
              },

              '&:active': {
                color:
                  semanticColors.light
                    .button.text
                    .pressedForeground,

                backgroundColor:
                  semanticColors.light
                    .button.text
                    .pressedBackground,
              },

              [`&.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.disabled
                      .foreground,

                  backgroundColor:
                    semanticColors.light
                      .button.disabled
                      .background,
                },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.text
                      .loading.foreground,

                  backgroundColor:
                    semanticColors.light
                      .button.text
                      .loading.background,

                  boxShadow:
                    'none',
                },
            },

          [`&.${buttonClasses.outlined}.${buttonClasses.colorError}`]:
            {
              color:
                semanticColors.light
                  .button.destructive
                  .foreground,

              borderColor:
                semanticColors.light
                  .button.destructive
                  .border,

              '&:hover': {
                color:
                  semanticColors.light
                    .button.destructive
                    .hoverForeground,

                borderColor:
                  semanticColors.light
                    .button.destructive
                    .hoverBackground,

                backgroundColor:
                  semanticColors.light
                    .button.destructive
                    .hoverBackground,
              },

              '&:active': {
                color:
                  semanticColors.light
                    .button.destructive
                    .pressedForeground,

                borderColor:
                  semanticColors.light
                    .button.destructive
                    .pressedForeground,

                backgroundColor:
                  'transparent',
              },

              [`&.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.disabled
                      .foreground,

                  borderColor:
                    semanticColors.light
                      .button.disabled
                      .border,

                  backgroundColor:
                    semanticColors.light
                      .button.disabled
                      .background,
                },

              [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                {
                  color:
                    semanticColors.light
                      .button.destructive
                      .loading.foreground,

                  borderColor:
                    semanticColors.light
                      .button.destructive
                      .loading.border,

                  backgroundColor:
                    semanticColors.light
                      .button.destructive
                      .loading.background,

                  boxShadow:
                    'none',
                },
            },

          ...theme.applyStyles(
            'dark',
            {
              '&.Mui-focusVisible, &:focus-visible':
                {
                  outline:
                    `2px dashed ${semanticColors.dark.button.focus.ring}`,
                },

              [`&.${buttonClasses.contained}.${buttonClasses.colorPrimary}`]:
                {
                  backgroundColor:
                    semanticColors.dark
                      .button.contained
                      .default,

                  color:
                    semanticColors.dark
                      .button.contained
                      .foreground,

                  '&:hover': {
                    backgroundColor:
                      semanticColors.dark
                        .button.contained
                        .hover,
                  },

                  '&:active': {
                    backgroundColor:
                      semanticColors.dark
                        .button.contained
                        .pressed,
                  },

                  [`&.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.disabled
                          .foreground,

                      backgroundColor:
                        semanticColors.dark
                          .button.disabled
                          .background,
                    },

                  [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.contained
                          .loading
                          .foreground,

                      backgroundColor:
                        semanticColors.dark
                          .button.contained
                          .loading
                          .background,

                      boxShadow:
                        'none',
                    },
                },

              [`&.${buttonClasses.outlined}.${buttonClasses.colorPrimary}`]:
                {
                  color:
                    semanticColors.dark
                      .button.outlined
                      .foreground,

                  borderColor:
                    semanticColors.dark
                      .button.outlined
                      .border,

                  '&:hover': {
                    color:
                      semanticColors.dark
                        .button.outlined
                        .foreground,

                    borderColor:
                      semanticColors.dark
                        .button.outlined
                        .border,

                    backgroundColor:
                      semanticColors.dark
                        .button.outlined
                        .hoverBackground,
                  },

                  '&:active': {
                    color:
                      semanticColors.dark
                        .button.outlined
                        .pressedForeground,

                    borderColor:
                      semanticColors.dark
                        .button.outlined
                        .pressedForeground,

                    backgroundColor:
                      'transparent',
                  },

                  [`&.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.disabled
                          .foreground,

                      borderColor:
                        semanticColors.dark
                          .button.disabled
                          .border,

                      backgroundColor:
                        semanticColors.dark
                          .button.disabled
                          .background,
                    },

                  [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.outlined
                          .loading
                          .foreground,

                      borderColor:
                        semanticColors.dark
                          .button.outlined
                          .loading.border,

                      backgroundColor:
                        semanticColors.dark
                          .button.outlined
                          .loading
                          .background,

                      boxShadow:
                        'none',
                    },
                },

              [`&.${buttonClasses.text}.${buttonClasses.colorPrimary}`]:
                {
                  color:
                    semanticColors.dark
                      .button.text
                      .foreground,

                  backgroundColor:
                    semanticColors.dark
                      .button.text
                      .background,

                  '&:hover': {
                    color:
                      semanticColors.dark
                        .button.text
                        .foreground,

                    backgroundColor:
                      semanticColors.dark
                        .button.text
                        .hoverBackground,
                  },

                  '&:active': {
                    color:
                      semanticColors.dark
                        .button.text
                        .pressedForeground,

                    backgroundColor:
                      semanticColors.dark
                        .button.text
                        .pressedBackground,
                  },

                  [`&.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.disabled
                          .foreground,

                      backgroundColor:
                        semanticColors.dark
                          .button.disabled
                          .background,
                    },

                  [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.text
                          .loading.foreground,

                      backgroundColor:
                        semanticColors.dark
                          .button.text
                          .loading.background,

                      boxShadow:
                        'none',
                    },
                },

              [`&.${buttonClasses.outlined}.${buttonClasses.colorError}`]:
                {
                  color:
                    semanticColors.dark
                      .button.destructive
                      .foreground,

                  borderColor:
                    semanticColors.dark
                      .button.destructive
                      .border,

                  '&:hover': {
                    color:
                      semanticColors.dark
                        .button.destructive
                        .hoverForeground,

                    borderColor:
                      semanticColors.dark
                        .button.destructive
                        .hoverBackground,

                    backgroundColor:
                      semanticColors.dark
                        .button.destructive
                        .hoverBackground,
                  },

                  '&:active': {
                    color:
                      semanticColors.dark
                        .button.destructive
                        .pressedForeground,

                    borderColor:
                      semanticColors.dark
                        .button.destructive
                        .pressedForeground,

                    backgroundColor:
                      'transparent',
                  },

                  [`&.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.disabled
                          .foreground,

                      borderColor:
                        semanticColors.dark
                          .button.disabled
                          .border,

                      backgroundColor:
                        semanticColors.dark
                          .button.disabled
                          .background,
                    },

                  [`&.${buttonClasses.loading}.${buttonClasses.disabled}`]:
                    {
                      color:
                        semanticColors.dark
                          .button.destructive
                          .loading.foreground,

                      borderColor:
                        semanticColors.dark
                          .button.destructive
                          .loading.border,

                      backgroundColor:
                        semanticColors.dark
                          .button.destructive
                          .loading.background,

                      boxShadow:
                        'none',
                    },
                },
            },
          ),
        }),

        sizeLarge: {
          height: '2.75rem',
          fontSize: '1rem',
          lineHeight: '1.75rem',
        },

        sizeMedium: {
          height: '2.5rem',
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
        },

        sizeSmall: {
          height: '2rem',
          fontSize: '0.75rem',
          lineHeight: '1.5rem',
        },

        startIcon: {
          marginRight:
            spacing[4],

          '& > *:nth-of-type(1)': {
            fontSize: '1.5rem',
            width: '1.5rem',
            height: '1.5rem',
          },
        },

        endIcon: {
          marginLeft:
            spacing[4],

          '& > *:nth-of-type(1)': {
            fontSize: '1.5rem',
            width: '1.5rem',
            height: '1.5rem',
          },
        },

        loadingIndicator: {
          color: 'inherit',
        },
      },
    },
  },
})