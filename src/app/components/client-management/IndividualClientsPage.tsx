'use client'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Sidebar } from './Sidebar'
import { TopHeader } from './TopHeader'
import { StatsCards } from './StatsCards'
import { ClientDirectory } from './ClientDirectory'

const BRAND = '#FF6B22'

export function IndividualClientsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden', bgcolor: 'background.default' }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, overflow: 'hidden', minWidth: 0 }}>
        <TopHeader onMenuClick={() => setSidebarOpen(true)} />

        <Box
          component="main"
          sx={{
            flex: 1,
            minHeight: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            px: { xs: 2, sm: 3, lg: 4 },
            py: { xs: 2.5, sm: 3 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 2,
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={700}>
                Individual Clients
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Detailed overview and management of individual clients
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: BRAND,
                '&:hover': { bgcolor: '#e55a1a' },
                px: 3,
                py: 1,
              }}
            >
              Add New Client
            </Button>
          </Box>

          <Box sx={{ mb: 3 }}>
            <StatsCards />
          </Box>

          <ClientDirectory />
        </Box>
      </Box>
    </Box>
  )
}
