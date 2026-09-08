import { primitives } from './primitives'

/**
 * Figma loading states use layered colours.
 *
 * CSS color-mix lets us preserve the relationship
 * between the base ULTRUS colour and the opacity
 * layer defined in Figma.
 */
const mixWithWhite = (
  color: string,
  whitePercent: number,
) =>
  `color-mix(in srgb, ${color} ${
    100 - whitePercent
  }%, white ${whitePercent}%)`

const mixWithBlack = (
  color: string,
  blackPercent: number,
) =>
  `color-mix(in srgb, ${color} ${
    100 - blackPercent
  }%, black ${blackPercent}%)`

export const semanticColors = {
  light: {
    button: {
      /**
       * CONTAINED
       */
      contained: {
        default: primitives.primaryRed[900],
        hover: primitives.primaryRed[700],
        pressed: primitives.primaryRed[900],
        foreground:
          primitives.opacityWhite[100],

        /**
         * Loading
         *
         * Figma:
         * primary/red1/900
         * +
         * opacity/white/white 40%
         */
        loading: {
          background: mixWithWhite(
            primitives.primaryRed[900],
            40,
          ),

          foreground:
            primitives.opacityWhite[100],
        },
      },

      /**
       * OUTLINED
       */
      outlined: {
        foreground:
          primitives.primaryRed[900],

        border:
          primitives.primaryRed[700],

        hoverBackground:
          primitives.opacityBlack[4],

        pressedForeground:
          primitives.primaryRed[700],

        /**
         * Loading
         *
         * Background:
         * button/secondary/enabled
         * +
         * opacity/black/black 4%
         *
         * Foreground / stroke:
         * outlined enabled colour
         * +
         * opacity/white/white 70%
         */
        loading: {
          background: mixWithBlack(
            primitives.opacityWhite[100],
            4,
          ),

          foreground: mixWithWhite(
            primitives.primaryRed[700],
            70,
          ),

          border: mixWithWhite(
            primitives.primaryRed[700],
            70,
          ),
        },
      },

      /**
       * TEXT
       */
      text: {
        foreground:
          primitives.primaryRed[900],

        background:
          primitives.opacityWhite[0],

        hoverBackground:
          primitives.opacityWhite[0],

        pressedBackground:
          primitives.opacityWhite[0],

        pressedForeground:
          primitives.primaryRed[700],

        /**
         * Loading
         *
         * Figma:
         * text/text-black
         * +
         * opacity/white/white 60%
         */
        loading: {
          foreground: mixWithWhite(
            primitives.secondaryGray[900],
            60,
          ),

          background:
            primitives.opacityWhite[0],
        },
      },

      /**
       * DESTRUCTIVE
       */
      destructive: {
        foreground:
          primitives.feedbackRed[500],

        border:
          primitives.feedbackRed[500],

        hoverBackground:
          primitives.feedbackRed[500],

        hoverForeground:
          primitives.opacityWhite[100],

        pressedForeground:
          primitives.feedbackRed[500],

        /**
         * Loading
         *
         * Background:
         * button/secondary/enabled
         * +
         * opacity/black/black 4%
         *
         * Foreground / stroke:
         * button/destructive/enabled
         * +
         * opacity/white/white 70%
         */
        loading: {
          background: mixWithBlack(
            primitives.opacityWhite[100],
            4,
          ),

          foreground: mixWithWhite(
            primitives.feedbackRed[500],
            70,
          ),

          border: mixWithWhite(
            primitives.feedbackRed[500],
            70,
          ),
        },
      },

      /**
       * DISABLED
       */
      disabled: {
        background:
          primitives.secondaryGray[100],

        foreground:
          primitives.secondaryGray[400],

        border:
          primitives.secondaryGray[100],
      },

      /**
       * FOCUS
       */
      focus: {
        ring:
          primitives.primaryRed[900],
      },
    },

    /**
     * GENERAL TEXT
     */
    text: {
      primary:
        primitives.secondaryGray[900],

      secondary:
        primitives.secondaryGray[700],
    },

    /**
     * GENERAL BACKGROUNDS
     */
    background: {
      default:
        primitives.opacityWhite[100],

      surface:
        primitives.opacityWhite[100],
    },
  },

  /**
   * DARK MODE
   *
   * Loading colours remain unchanged until
   * the equivalent dark-mode loading states
   * are established in Figma.
   */
  dark: {
    button: {
      contained: {
        default:
          primitives.primaryRed[400],

        hover:
          primitives.primaryRed[300],

        pressed:
          primitives.primaryRed[500],

        foreground:
          primitives.opacityWhite[100],

        loading: {
          background:
            primitives.primaryRed[400],

          foreground:
            primitives.opacityWhite[100],
        },
      },

      outlined: {
        foreground:
          primitives.primaryRed[300],

        border:
          primitives.primaryRed[300],

        hoverBackground:
          primitives.opacityWhite[8],

        pressedForeground:
          primitives.primaryRed[200],

        loading: {
          background:
            primitives.opacityWhite[0],

          foreground:
            primitives.primaryRed[300],

          border:
            primitives.primaryRed[300],
        },
      },

      text: {
        foreground:
          primitives.opacityWhite[100],

        background:
          primitives.opacityWhite[0],

        hoverBackground:
          primitives.opacityWhite[0],

        pressedBackground:
          primitives.opacityWhite[0],

        pressedForeground:
          primitives.opacityWhite[100],

        loading: {
          foreground:
            primitives.opacityWhite[100],

          background:
            primitives.opacityWhite[0],
        },
      },

      destructive: {
        foreground:
          primitives.feedbackRed[300],

        border:
          primitives.feedbackRed[300],

        hoverBackground:
          primitives.feedbackRed[600],

        hoverForeground:
          primitives.opacityWhite[100],

        pressedForeground:
          primitives.feedbackRed[200],

        loading: {
          background:
            primitives.opacityWhite[0],

          foreground:
            primitives.feedbackRed[300],

          border:
            primitives.feedbackRed[300],
        },
      },

      disabled: {
        background:
          primitives.opacityWhite[12],

        foreground:
          primitives.opacityWhite[38],

        border:
          primitives.opacityWhite[12],
      },

      focus: {
        ring:
          primitives.primaryRed[300],
      },
    },

    text: {
      primary:
        primitives.opacityWhite[100],

      secondary:
        primitives.secondaryGray[300],
    },

    background: {
      default: '#121212',
      surface: '#1E1E1E',
    },
  },
} as const