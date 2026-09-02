import { primitives } from './primitives'

export const semanticColors = {
  light: {
    button: {
      contained: {
        default: primitives.primaryRed[900],
        hover: primitives.primaryRed[700],
        pressed: primitives.primaryRed[900],
        foreground: primitives.opacityWhite[100],
      },

      outlined: {
        foreground: primitives.primaryRed[900],
        border: primitives.primaryRed[700],
        hoverBackground: primitives.opacityBlack[4],
        pressedForeground: primitives.primaryRed[700],
      },

      text: {
        foreground: primitives.primaryRed[900],

        background: primitives.opacityWhite[0],

        hoverBackground: primitives.opacityWhite[0],

        pressedBackground: primitives.opacityWhite[0],

        pressedForeground: primitives.primaryRed[700],
      },

      destructive: {
        foreground: primitives.feedbackRed[500],
        border: primitives.feedbackRed[500],
        hoverBackground: primitives.feedbackRed[500],
        hoverForeground: primitives.opacityWhite[100],
        pressedForeground: primitives.feedbackRed[500],
      },

      disabled: {
        background: primitives.secondaryGray[100],
        foreground: primitives.secondaryGray[400],
        border: primitives.secondaryGray[100],
      },

      focus: {
        ring: primitives.primaryRed[900],
      },
    },

    text: {
      primary: primitives.secondaryGray[900],
      secondary: primitives.secondaryGray[700],
    },

    background: {
      default: primitives.opacityWhite[100],
      surface: primitives.opacityWhite[100],
    },
  },

  dark: {
    button: {
      contained: {
        default: primitives.primaryRed[400],
        hover: primitives.primaryRed[300],
        pressed: primitives.primaryRed[500],
        foreground: primitives.opacityWhite[100],
      },

      outlined: {
        foreground: primitives.primaryRed[300],
        border: primitives.primaryRed[300],
        hoverBackground: primitives.opacityWhite[8],
        pressedForeground: primitives.primaryRed[200],
      },

      text: {
        foreground: primitives.opacityWhite[100],

        background: primitives.opacityWhite[0],
        hoverBackground: primitives.opacityWhite[0],
        pressedBackground: primitives.opacityWhite[0],
        pressedForeground: primitives.opacityWhite[100],
      },

      destructive: {
        foreground: primitives.feedbackRed[300],
        border: primitives.feedbackRed[300],
        hoverBackground: primitives.feedbackRed[600],
        hoverForeground: primitives.opacityWhite[100],
        pressedForeground: primitives.feedbackRed[200],
      },

      disabled: {
        background: primitives.opacityWhite[12],
        foreground: primitives.opacityWhite[38],
        border: primitives.opacityWhite[12],
      },

      focus: {
        ring: primitives.primaryRed[300],
      },
    },

    text: {
      primary: primitives.opacityWhite[100],
      secondary: primitives.secondaryGray[300],
    },

    background: {
      default: '#121212',
      surface: '#1E1E1E',
    },
  },
} as const