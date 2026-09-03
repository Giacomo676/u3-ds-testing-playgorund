import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'

import { materialSymbolNames } from '../icons/materialSymbolNames'
import { UltrusButton } from '../components/UltrusButton'

const meta = {
  title: 'Components/Button',
  component: UltrusButton,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: 'Button label',
    variant: 'contained',
    size: 'medium',

    startIcon: undefined,
    endIcon: undefined,

    disabled: false,
    loading: false,
    fullWidth: false,
  },

  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
    },

    variant: {
      control: 'select',
      options: [
        'contained',
        'outlined',
        'text',
        'destructive',
      ],
    },

    size: {
      control: 'select',
      options: [
        'small',
        'medium',
        'large',
      ],
    },

    startIcon: {
      name: 'Start icon',
      control: 'select',
      options: [
        undefined,
        ...materialSymbolNames,
      ],
    },

    endIcon: {
      name: 'End icon',
      control: 'select',
      options: [
        undefined,
        ...materialSymbolNames,
      ],
    },

    loading: {
      control: 'boolean',
    },

    disabled: {
      control: 'boolean',
    },

    fullWidth: {
      name: 'Full width',
      control: 'boolean',
    },
  },

  /**
   * Storybook's centred layout normally gives the Button
   * no meaningful parent width to expand into.
   *
   * When Full width is enabled, this wrapper gives it
   * a 320px container so the behaviour can be tested.
   */
  render: (args) => (
    <Box
      sx={{
        width: args.fullWidth
          ? '20rem'
          : 'fit-content',
      }}
    >
      <UltrusButton {...args} />
    </Box>
  ),
} satisfies Meta<typeof UltrusButton>

export default meta

type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'contained',
    disabled: true,
  },
}

/**
 * Docs-only examples.
 *
 * These remain visible in the generated Docs page,
 * but are hidden from the Storybook sidebar.
 */
export const StartIcon: Story = {
  name: 'Start icon',
  tags: ['!dev'],

  args: {
    variant: 'contained',
    startIcon: 'add',
    endIcon: undefined,
  },
}

export const EndIcon: Story = {
  name: 'End icon',
  tags: ['!dev'],

  args: {
    variant: 'contained',
    startIcon: undefined,
    endIcon: 'arrow_forward',
  },
}

export const Loading: Story = {
  tags: ['!dev'],

  args: {
    variant: 'contained',
    children: 'Loading',
    startIcon: undefined,
    endIcon: undefined,
    loading: true,
  },
}