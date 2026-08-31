export const fontFamilies = {
  primary: '"ULTRUS", Arial, sans-serif',
  mono: '"ULTRUS Mono", monospace',
} as const

export const typographyTokens = {
  h1: {
    mobile: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
      fontWeight: 500,
    },
    tablet: {
      fontSize: '1.875rem',
      lineHeight: '2.5rem',
      fontWeight: 500,
    },
    desktop: {
      fontSize: '2rem',
      lineHeight: '4rem',
      fontWeight: 500,
    },
  },

  h2: {
    mobile: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 500,
    },
    tablet: {
      fontSize: '1.625rem',
      lineHeight: '2.25rem',
      fontWeight: 500,
    },
    desktop: {
      fontSize: '1.75rem',
      lineHeight: '2.25rem',
      fontWeight: 500,
    },
  },

  h3: {
    mobile: {
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
      fontWeight: 500,
    },
    tabletDesktop: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 500,
    },
  },

  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: 500,
  },

  h5: {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },

  h6: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
  },

  body1: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    letterSpacing: '0.025rem',
    fontWeight: 300,
  },

  body2: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.025rem',
    fontWeight: 300,
  },

  subtitle1: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
  },

  subtitle2: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
  },

  overline: {
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
    fontWeight: 400,
    textTransform: 'uppercase' as const,
  },

  caption: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.025rem',
    fontWeight: 400,
  },

  legalRegular: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.025rem',
    fontWeight: 400,
  },

  legalBold: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    letterSpacing: '0.025rem',
    fontWeight: 500,
  },
} as const