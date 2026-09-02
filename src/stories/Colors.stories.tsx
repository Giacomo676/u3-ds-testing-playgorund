import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material'

import { primitives } from '../theme/primitives'
import { semanticColors } from '../theme/semanticColors'

const meta = {
  title: 'Foundations/Colors',

  parameters: {
    layout: 'padded',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

type ColorSwatchProps = {
  name: string
  value: string
}

function ColorSwatch({
  name,
  value,
}: ColorSwatchProps) {
  return (
    <Paper
      variant="outlined"
      sx={{
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      <Box
        sx={{
          height: 80,
          backgroundColor: value,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      />

      <Box sx={{ p: 1.5 }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500 }}
        >
          {name}
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: 'block',
            mt: 0.5,
            overflowWrap: 'anywhere',
          }}
        >
          {value}
        </Typography>
      </Box>
    </Paper>
  )
}

function flattenColors(
  object: Record<string, unknown>,
  prefix = '',
): Array<[string, string]> {
  const colors: Array<[string, string]> = []

  Object.entries(object).forEach(([key, value]) => {
    const name = prefix
      ? `${prefix}.${key}`
      : key

    if (typeof value === 'string') {
      colors.push([name, value])
      return
    }

    if (typeof value === 'object' && value !== null) {
      colors.push(
        ...flattenColors(
          value as Record<string, unknown>,
          name,
        ),
      )
    }
  })

  return colors
}

export const Primitives: Story = {
  name: 'Primitives',

  render: () => (
    <Stack spacing={6}>
      <Box>
        <Typography variant="h3">
          Primitive colors
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Raw color values used as the foundation
          for semantic color tokens.
        </Typography>
      </Box>

      {Object.entries(primitives).map(
        ([paletteName, palette]) => (
          <Box key={paletteName}>
            <Typography
              variant="h5"
              sx={{ mb: 2 }}
            >
              {paletteName}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fill, minmax(120px, 1fr))',
                gap: 1.5,
              }}
            >
              {Object.entries(palette).map(
                ([token, value]) => (
                  <ColorSwatch
                    key={token}
                    name={token}
                    value={value}
                  />
                ),
              )}
            </Box>
          </Box>
        ),
      )}
    </Stack>
  ),
}

export const Semantic: Story = {
  name: 'Semantic',

  render: () => (
    <Stack spacing={6}>
      <Box>
        <Typography variant="h3">
          Semantic colors
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Contextual color roles mapped from the
          primitive color palette.
        </Typography>
      </Box>

      {Object.entries(semanticColors).map(
        ([mode, colors]) => (
          <Box key={mode}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                textTransform: 'capitalize',
              }}
            >
              {mode} mode
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fill, minmax(180px, 1fr))',
                gap: 1.5,
              }}
            >
              {flattenColors(colors).map(
                ([name, value]) => (
                  <ColorSwatch
                    key={`${mode}-${name}`}
                    name={name}
                    value={value}
                  />
                ),
              )}
            </Box>
          </Box>
        ),
      )}
    </Stack>
  ),
}