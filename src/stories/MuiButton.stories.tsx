import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from '@mui/material/Button'

const meta = {
  title: 'MUI/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    children: 'ULTRUS Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },

  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },

    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'error',
        'warning',
        'info',
      ],
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },

    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Contained: Story = {}

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

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}