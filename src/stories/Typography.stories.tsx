import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps, ReactNode } from 'react'

import {
  Controls,
  Description,
  Primary,
  Stories,
  Title,
} from '@storybook/addon-docs/blocks'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { typographyTokens } from '../theme/typography'

type MuiTypographyProps =
  ComponentProps<typeof Typography>

type TypographyStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'legalRegular'
  | 'legalBold'

type TypographyStoryArgs = {
  style: TypographyStyle
  children: ReactNode
  align: MuiTypographyProps['align']
  color: MuiTypographyProps['color']
  gutterBottom: boolean
  noWrap: boolean
}

const standardVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
] as const

const meta = {
  title: 'Foundations/Typography',

  parameters: {
    layout: 'padded',

    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },

  tags: ['autodocs'],

  args: {
    style: 'body1',
    children:
      'The quick brown fox jumps over the lazy dog.',
    align: 'inherit',
    color: 'text.primary',
    gutterBottom: false,
    noWrap: false,
  },

  argTypes: {
    style: {
      name: 'Style',
      control: 'select',
      options: [
        ...standardVariants,
        'legalRegular',
        'legalBold',
      ],
    },

    children: {
      name: 'Text',
      control: 'text',
    },

    align: {
      control: 'select',
      options: [
        'inherit',
        'left',
        'center',
        'right',
        'justify',
      ],
    },

    color: {
      control: 'select',
      options: [
        'text.primary',
        'text.secondary',
        'primary',
        'secondary',
        'error',
      ],
    },

    gutterBottom: {
      control: 'boolean',
    },

    noWrap: {
      control: 'boolean',
    },
  },

  render: ({
    style,
    children,
    align,
    color,
    gutterBottom,
    noWrap,
  }) => {
    const commonProps = {
      align,
      color,
      gutterBottom,
      noWrap,
    }

    if (
      style === 'legalRegular' ||
      style === 'legalBold'
    ) {
      return (
        <Typography
          {...commonProps}
          sx={typographyTokens[style]}
        >
          {children}
        </Typography>
      )
    }

    return (
      <Typography
        {...commonProps}
        variant={style}
      >
        {children}
      </Typography>
    )
  },
} satisfies Meta<TypographyStoryArgs>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Hidden interactive playground used
 * as the Primary example in Docs.
 */
export const Playground: Story = {
  tags: ['!dev'],
}

/**
 * Shared token label.
 */
function StyleLabel({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        width: '7rem',
        flexShrink: 0,
      }}
    >
      {children}
    </Typography>
  )
}

/**
 * HEADINGS
 */
export const Headings: Story = {
  args: {
    children: 'The Heading',
  },

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },

  render: ({
    children,
    align,
    color,
    gutterBottom,
    noWrap,
  }) => {
    const headings = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
    ] as const

    return (
      <Stack spacing={3}>
        {headings.map((variant) => (
          <Stack
            key={variant}
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            <StyleLabel>
              {variant}
            </StyleLabel>

            <Typography
              variant={variant}
              align={align}
              color={color}
              gutterBottom={gutterBottom}
              noWrap={noWrap}
            >
              {children}
            </Typography>
          </Stack>
        ))}
      </Stack>
    )
  },
}

/**
 * SUBTITLES
 */
export const Subtitles: Story = {
  args: {
    children: 'Subtitle text',
  },

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },

  render: ({
    children,
    align,
    color,
    gutterBottom,
    noWrap,
  }) => {
    const subtitles = [
      'subtitle1',
      'subtitle2',
    ] as const

    return (
      <Stack spacing={3}>
        {subtitles.map((variant) => (
          <Stack
            key={variant}
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            <StyleLabel>
              {variant}
            </StyleLabel>

            <Typography
              variant={variant}
              align={align}
              color={color}
              gutterBottom={gutterBottom}
              noWrap={noWrap}
            >
              {children}
            </Typography>
          </Stack>
        ))}
      </Stack>
    )
  },
}

/**
 * BODY TEXT
 */
export const BodyText: Story = {
  name: 'Body text',

  args: {
    children:
      'The quick brown fox jumps over the lazy dog.',
  },

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },

  render: ({
    children,
    align,
    color,
    gutterBottom,
    noWrap,
  }) => {
    const bodyStyles = [
      'body1',
      'body2',
    ] as const

    return (
      <Stack spacing={3}>
        {bodyStyles.map((variant) => (
          <Stack
            key={variant}
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            <StyleLabel>
              {variant}
            </StyleLabel>

            <Typography
              variant={variant}
              align={align}
              color={color}
              gutterBottom={gutterBottom}
              noWrap={noWrap}
            >
              {children}
            </Typography>
          </Stack>
        ))}
      </Stack>
    )
  },
}

/**
 * SUPPORTING
 */
export const Supporting: Story = {
  args: {
    children: 'Supporting text',
  },

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },

  render: ({
    children,
    align,
    color,
    gutterBottom,
    noWrap,
  }) => {
    const supportingStyles = [
      'caption',
      'overline',
    ] as const

    return (
      <Stack spacing={3}>
        {supportingStyles.map((variant) => (
          <Stack
            key={variant}
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            <StyleLabel>
              {variant}
            </StyleLabel>

            <Typography
              variant={variant}
              align={align}
              color={color}
              gutterBottom={gutterBottom}
              noWrap={noWrap}
            >
              {children}
            </Typography>
          </Stack>
        ))}
      </Stack>
    )
  },
}

/**
 * LEGAL
 */
export const Legal: Story = {
  args: {
    children:
      'Legal text — important supporting information and terms.',
  },

  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },

  render: ({
    children,
    align,
    color,
    gutterBottom,
    noWrap,
  }) => {
    const legalStyles = [
      'legalRegular',
      'legalBold',
    ] as const

    return (
      <Stack spacing={3}>
        {legalStyles.map((style) => (
          <Stack
            key={style}
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            <StyleLabel>
              {style}
            </StyleLabel>

            <Typography
              align={align}
              color={color}
              gutterBottom={gutterBottom}
              noWrap={noWrap}
              sx={typographyTokens[style]}
            >
              {children}
            </Typography>
          </Stack>
        ))}
      </Stack>
    )
  },
}