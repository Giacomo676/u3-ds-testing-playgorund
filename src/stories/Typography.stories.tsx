import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Divider, Stack, Typography } from '@mui/material'

const meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const TypeScale: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="caption">
          H1
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="caption">
          H2
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="caption">
          H3
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="caption">
          H4
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="caption">
          H5
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6">Heading 6</Typography>
        <Typography variant="caption">
          H6
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="body1">
          Body 1 — The quick brown fox jumps over the lazy dog.
        </Typography>
        <Typography variant="caption">
          Body 1
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="body2">
          Body 2 — The quick brown fox jumps over the lazy dog.
        </Typography>
        <Typography variant="caption">
          Body 2
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle1">
          Subtitle 1
        </Typography>
        <Typography variant="caption">
          Subtitle 1
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle2">
          Subtitle 2
        </Typography>
        <Typography variant="caption">
          Subtitle 2
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="overline">
          Overline
        </Typography>
        <Typography variant="caption" display="block">
          Overline
        </Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="caption">
          Caption — Supporting information
        </Typography>
      </Box>
    </Stack>
  ),
}