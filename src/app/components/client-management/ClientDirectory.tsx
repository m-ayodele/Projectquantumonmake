'use client'

import { useState } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Search, SlidersHorizontal, ArrowUpDown, Copy, ChevronDown } from './icons'
import { ClientTable } from './ClientTable'

const BRAND = '#FF6B22'

function ToolbarDropdown({ icon, label, options }: { icon: React.ReactNode; label: string; options: string[] }) {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        startIcon={icon}
        endIcon={<ChevronDown size={13} />}
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{
          color: 'text.secondary',
          borderColor: 'divider',
          bgcolor: 'background.paper',
          fontWeight: 500,
          fontSize: { xs: 0, sm: 13 },
          minWidth: { xs: 36, sm: 'auto' },
          px: { xs: 1, sm: 1.5 },
          '& .MuiButton-startIcon': { mr: { xs: 0, sm: 0.5 } },
          '& .MuiButton-endIcon': { display: { xs: 'none', sm: 'flex' } },
          '&:hover': { borderColor: BRAND, color: BRAND },
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>{label}</Box>
      </Button>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        {options.map((opt) => (
          <MenuItem key={opt} onClick={() => setAnchor(null)} sx={{ fontSize: 14 }}>
            {opt}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export function ClientDirectory() {
  const [search, setSearch] = useState('')

  return (
    <Paper sx={{ borderRadius: 3 }}>
      <Box sx={{ px: { xs: 2, sm: 3 }, py: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Typography variant="body1" fontWeight={600}>Client Directory</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 1,
          px: { xs: 2, sm: 3 },
          py: 1.5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: 'grey.50',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            px: 1.5,
            py: 0.5,
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Search size={15} color="#9ca3af" />
          <InputBase
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ fontSize: 14, flex: 1 }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
          <ToolbarDropdown
            icon={<SlidersHorizontal size={14} />}
            label="Filter"
            options={['Policyholder', 'Beneficiary', 'Next of Kin', 'Legal Guardian']}
          />
          <ToolbarDropdown
            icon={<ArrowUpDown size={14} />}
            label="Sort"
            options={['Name (A–Z)', 'Name (Z–A)', 'Date Added (Newest)', 'Date Added (Oldest)']}
          />
          <ToolbarDropdown
            icon={<Copy size={14} />}
            label="Bulk Action"
            options={['Export Selected', 'Delete Selected']}
          />
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: BRAND,
              '&:hover': { bgcolor: '#e55a1a' },
              px: { xs: 1.5, sm: 2 },
              fontSize: { xs: 12, sm: 13 },
            }}
          >
            Export
          </Button>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 0, sm: 0 } }}>
        <ClientTable search={search} />
      </Box>
    </Paper>
  )
}
