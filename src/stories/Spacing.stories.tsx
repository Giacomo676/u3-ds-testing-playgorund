import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { spacing } from '../theme/spacing'

const meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <Stack spacing={3}>
      {Object.entries(spacing).map(([token, value]) => (
        <Stack
          key={token}
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Box
            sx={{
              width: '5rem',
              flexShrink: 0,
            }}
          >
            <Typography variant="body2">
              {token}
            </Typography>
          </Box>

          <Box
            sx={{
              width: value,
              height: '1.5rem',
              bgcolor: 'primary.main',
              borderRadius: '0.25rem',
              flexShrink: 0,
            }}
          />

          <Typography
            variant="body2"
            color="text.secondary"
          >
            {value}
          </Typography>
        </Stack>
      ))}
    </Stack>
  ),
}