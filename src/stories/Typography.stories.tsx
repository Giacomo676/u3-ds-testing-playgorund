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
 * Shared label used on the left-hand side
 * of the grouped typography examples.
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
  render: () => {
    const headings = [
      ['h1', 'The H1 Heading'],
      ['h2', 'The H2 Heading'],
      ['h3', 'The H3 Heading'],
      ['h4', 'The H4 Heading'],
      ['h5', 'The H5 Heading'],
      ['h6', 'The H6 Heading'],
    ] as const

    return (
      <Stack spacing={3}>
        {headings.map(([variant, label]) => (
          <Stack
            key={variant}
            direction="row"
            spacing={3}
            alignItems="baseline"
          >
            <StyleLabel>
              {variant}
            </StyleLabel>

            <Typography variant={variant}>
              {label}
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
  render: () => (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          subtitle1
        </StyleLabel>

        <Typography variant="subtitle1">
          Subtitle 1
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          subtitle2
        </StyleLabel>

        <Typography variant="subtitle2">
          Subtitle 2
        </Typography>
      </Stack>
    </Stack>
  ),
}

/**
 * BODY TEXT
 */
export const BodyText: Story = {
  name: 'Body text',

  render: () => (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          body1
        </StyleLabel>

        <Typography variant="body1">
          Body 1 — The quick brown fox jumps over
          the lazy dog.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          body2
        </StyleLabel>

        <Typography variant="body2">
          Body 2 — The quick brown fox jumps over
          the lazy dog.
        </Typography>
      </Stack>
    </Stack>
  ),
}

/**
 * SUPPORTING
 */
export const Supporting: Story = {
  render: () => (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          caption
        </StyleLabel>

        <Typography variant="caption">
          Caption text
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          overline
        </StyleLabel>

        <Typography variant="overline">
          Overline text
        </Typography>
      </Stack>
    </Stack>
  ),
}

/**
 * LEGAL
 */
export const Legal: Story = {
  render: () => (
    <Stack spacing={3}>
      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          legalRegular
        </StyleLabel>

        <Typography
          sx={typographyTokens.legalRegular}
        >
          Legal text — important supporting
          information and terms.
        </Typography>
      </Stack>

      <Stack
        direction="row"
        spacing={3}
        alignItems="baseline"
      >
        <StyleLabel>
          legalBold
        </StyleLabel>

        <Typography
          sx={typographyTokens.legalBold}
        >
          Legal text — important supporting
          information and terms.
        </Typography>
      </Stack>
    </Stack>
  ),
}