import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import { materialSymbolNames } from '../icons/materialSymbolNames'
import { UltrusIcon } from '../icons/UltrusIcon'

const meta = {
  title: 'Foundations/Icons',

  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Overview: Story = {
  name: 'Overview',

  render: () => (
    <Stack spacing={5}>
      <Box>
        <Typography variant="h3">
          Icons
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Approved Material Symbols used across ULTRUS.
          Icon family, weight and optical settings are
          controlled globally by the design system.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(140px, 1fr))',
          gap: 2,
        }}
      >
        {materialSymbolNames.map((name) => (
          <Paper
            key={name}
            variant="outlined"
            sx={{
              p: 2,
              minHeight: 120,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <UltrusIcon
              name={name}
              sx={{ fontSize: 32 }}
            />

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                textAlign: 'center',
                overflowWrap: 'anywhere',
              }}
            >
              {name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Stack>
  ),
}