import { primitives } from './primitives'

export const semanticColors = {
  light: {
    action: {
      primary: {
        default: primitives.primaryRed[900],
        hover: primitives.primaryRed[600],
        pressed: primitives.primaryRed[700],
        foreground: primitives.opacityWhite[100],
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
    action: {
      primary: {
        default: primitives.primaryRed[400],
        hover: primitives.primaryRed[300],
        pressed: primitives.primaryRed[200],
        foreground: primitives.opacityWhite[100],
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