import { primitives } from './primitives'

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
        default:
          primitives.primaryRed[950],

        hover:
          primitives.primaryRed[800],

        pressed:
          primitives.primaryRed[950],

        foreground:
          primitives.opacityWhite[100],

        loading: {
          background: mixWithWhite(
            primitives.primaryRed[950],
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

      disabled: {
        background:
          primitives.secondaryGray[100],

        foreground:
          primitives.secondaryGray[400],

        border:
          primitives.secondaryGray[100],
      },

      focus: {
        ring:
          primitives.primaryRed[900],
      },
    },

    /**
     * ICON BUTTON
     */
    iconButton: {
      /**
       * SOLID
       *
       * Directly mapped from the Figma
       * icon button/solid semantic variables.
       */
      solid: {
        enabled: {
          background:
            primitives.opacityWhite[100],

          border:
            primitives.secondaryGray[500],

          foreground:
            primitives.secondaryGray[900],
        },

        hovered: {
          background:
            primitives.secondaryGray[100],

          border:
            primitives.secondaryGray[500],

          foreground:
            primitives.secondaryGray[900],
        },

        focused: {
          background:
            primitives.opacityWhite[100],

          border:
            primitives.secondaryGray[500],

          foreground:
            primitives.secondaryGray[900],

          outline:
            primitives.primaryRed[900],
        },

        pressed: {
          background:
            primitives.opacityWhite[100],

          border:
            primitives.secondaryGray[500],

          foreground:
            primitives.secondaryGray[900],
        },

        disabled: {
          background:
            primitives.secondaryGray[200],

          border:
            primitives.opacityWhite[0],

          foreground:
            primitives.secondaryGray[500],
        },

        /**
         * Figma semantic:
         * icon button/solid/active
         *
         * Reserved for a future active/selected state.
         */
        active:
          primitives.primaryRed[100],
      },

      /**
       * MINIMAL
       *
       * Directly mapped from the Figma
       * icon button/minimal semantic variables.
       */
      minimal: {
        enabled: {
          background:
            primitives.opacityWhite[0],

          border:
            primitives.opacityWhite[0],

          foreground:
            primitives.secondaryGray[900],
        },

        hovered: {
          background:
            primitives.secondaryGray[100],

          border:
            primitives.opacityWhite[0],

          foreground:
            primitives.secondaryGray[900],
        },

        focused: {
          background:
            primitives.opacityWhite[0],

          border:
            primitives.opacityWhite[0],

          foreground:
            primitives.secondaryGray[900],

          outline:
            primitives.primaryRed[900],
        },

        pressed: {
          background:
            primitives.opacityWhite[0],

          border:
            primitives.opacityWhite[0],

          foreground:
            primitives.secondaryGray[900],
        },

        disabled: {
          background:
            primitives.opacityWhite[0],

          border:
            primitives.opacityWhite[0],

          foreground:
            primitives.secondaryGray[500],
        },

        /**
         * Reserved for future active/selected state.
         */
        active:
          primitives.primaryRed[100],
      },
    },

    text: {
      primary:
        primitives.secondaryGray[900],

      secondary:
        primitives.secondaryGray[700],
    },

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
   * Icon Button dark-mode values are not yet
   * represented here because the Figma references
   * supplied so far are specifically Light mode.
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