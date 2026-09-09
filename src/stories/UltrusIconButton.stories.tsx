import type {
  Meta,
  StoryObj,
} from '@storybook/react-vite'

import Stack from '@mui/material/Stack'

import { UltrusIconButton } from '../components/UltrusIconButton'
import { materialSymbolNames } from '../icons/materialSymbolNames'

const meta = {
  title:
    'Components/Buttons/Icon Button',

  component:
    UltrusIconButton,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    icon: 'close',

    variant: 'solid',

    size: 'medium',

    disabled: false,

    'aria-label': 'Close',
  },

  argTypes: {
    icon: {
      control: 'select',
      options:
        materialSymbolNames,
    },

    variant: {
      control: 'select',
      options: [
        'solid',
        'minimal',
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

    disabled: {
      control: 'boolean',
    },

    'aria-label': {
      name:
        'Accessible label',

      control: 'text',
    },
  },
} satisfies Meta<
  typeof UltrusIconButton
>

export default meta

type Story =
  StoryObj<typeof meta>

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'solid',
    disabled: true,
  },
}

/**
 * Docs-only size comparison.
 */
export const Sizes: Story = {
  tags: ['!dev'],

  render: (args) => (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
    >
      <UltrusIconButton
        {...args}
        size="large"
        aria-label="Large close button"
      />

      <UltrusIconButton
        {...args}
        size="medium"
        aria-label="Medium close button"
      />

      <UltrusIconButton
        {...args}
        size="small"
        aria-label="Small close button"
      />
    </Stack>
  ),
}