import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps, ReactNode } from 'react'
import Typography from '@mui/material/Typography'

import { typographyTokens } from '../theme/typography'

type MuiTypographyProps = ComponentProps<typeof Typography>

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
  },

  args: {
    style: 'body1',
    children: 'The quick brown fox jumps over the lazy dog.',
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

    if (style === 'legalRegular' || style === 'legalBold') {
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

export const H1: Story = {
  name: 'h1',
  args: {
    style: 'h1',
    children: 'The H1 Heading',
  },
}

export const H2: Story = {
  name: 'h2',
  args: {
    style: 'h2',
    children: 'The H2 Heading',
  },
}

export const H3: Story = {
  name: 'h3',
  args: {
    style: 'h3',
    children: 'The H3 Heading',
  },
}

export const H4: Story = {
  name: 'h4',
  args: {
    style: 'h4',
    children: 'The H4 Heading',
  },
}

export const H5: Story = {
  name: 'h5',
  args: {
    style: 'h5',
    children: 'The H5 Heading',
  },
}

export const H6: Story = {
  name: 'h6',
  args: {
    style: 'h6',
    children: 'The H6 Heading',
  },
}

export const Subtitle1: Story = {
  name: 'subtitle1',
  args: {
    style: 'subtitle1',
    children: 'Subtitle 1',
  },
}

export const Subtitle2: Story = {
  name: 'subtitle2',
  args: {
    style: 'subtitle2',
    children: 'Subtitle 2',
  },
}

export const Body1: Story = {
  name: 'body1',
  args: {
    style: 'body1',
    children:
      'Body 1 — The quick brown fox jumps over the lazy dog.',
  },
}

export const Body2: Story = {
  name: 'body2',
  args: {
    style: 'body2',
    children:
      'Body 2 — The quick brown fox jumps over the lazy dog.',
  },
}

export const Caption: Story = {
  name: 'caption',
  args: {
    style: 'caption',
    children: 'Caption text',
  },
}

export const Overline: Story = {
  name: 'overline',
  args: {
    style: 'overline',
    children: 'Overline text',
  },
}

export const LegalRegular: Story = {
  name: 'legalRegular',
  args: {
    style: 'legalRegular',
    children:
      'Legal text — important supporting information and terms.',
  },
}

export const LegalBold: Story = {
  name: 'legalBold',
  args: {
    style: 'legalBold',
    children:
      'Legal text — important supporting information and terms.',
  },
}