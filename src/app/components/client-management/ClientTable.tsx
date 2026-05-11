'use client'

import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import { MoreHorizontal } from './icons'

export type Client = {
  id: string
  name: string
  type: 'Policyholder' | 'Beneficiary' | 'Next of Kin' | 'Legal Guardian'
  nin: string
  contact: string
  dateAdded: string
}

const MOCK_CLIENTS: Client[] = [
  { id: 'L1-90321', name: 'Elena Adetayo',   type: 'Policyholder',   nin: '10923567892', contact: '08162720193', dateAdded: '22 Jan, 2026' },
  { id: 'L1-10892', name: 'Temidayo Samuel', type: 'Beneficiary',    nin: '10923567892', contact: '09087120193', dateAdded: '22 Jan, 2026' },
  { id: 'L1-11239', name: 'Ayola Timothy',   type: 'Next of Kin',    nin: '10923567892', contact: '08011145691', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90329', name: 'Grace Banks',     type: 'Policyholder',   nin: '10923567892', contact: '08134267110', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90320', name: 'Balogun Mike',    type: 'Policyholder',   nin: '10923567892', contact: '08039276118', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90320', name: 'Balogun Mike',    type: 'Legal Guardian', nin: '10923567892', contact: '08039276118', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90320', name: 'Balogun Mike',    type: 'Policyholder',   nin: '10923567892', contact: '08039276118', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90320', name: 'Balogun Mike',    type: 'Policyholder',   nin: '10923567892', contact: '08039276118', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90320', name: 'Balogun Mike',    type: 'Beneficiary',    nin: '10923567892', contact: '08039276118', dateAdded: '22 Jan, 2026' },
  { id: 'L1-90320', name: 'Balogun Mike',    type: 'Policyholder',   nin: '10923567892', contact: '08039276118', dateAdded: '22 Jan, 2026' },
]

function ActionMenu() {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null)
  return (
    <>
      <IconButton size="small" onClick={(e) => setAnchor(e.currentTarget)}>
        <MoreHorizontal size={16} />
      </IconButton>
      <Menu anchorEl={anchor} open={Boolean(anchor)} onClose={() => setAnchor(null)}>
        <MenuItem onClick={() => setAnchor(null)}>View Details</MenuItem>
        <MenuItem onClick={() => setAnchor(null)}>Edit Client</MenuItem>
        <MenuItem onClick={() => setAnchor(null)} sx={{ color: 'error.main' }}>Delete</MenuItem>
      </Menu>
    </>
  )
}

function ClientCard({ client }: { client: Client }) {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Typography variant="body2" fontWeight={600}>{client.name}</Typography>
        <Typography variant="caption" color="text.secondary">ID: {client.id}</Typography>
        <Chip
          label={client.type}
          size="small"
          sx={{ alignSelf: 'flex-start', bgcolor: 'rgba(255,107,34,0.08)', color: '#c2410c', fontWeight: 500, fontSize: 11 }}
        />
        <Box sx={{ mt: 0.5 }}>
          <Typography variant="caption" color="text.secondary" display="block">NIN: {client.nin}</Typography>
          <Typography variant="caption" color="text.secondary" display="block">Contact: {client.contact}</Typography>
          <Typography variant="caption" color="text.secondary" display="block">{client.dateAdded}</Typography>
        </Box>
      </Box>
      <ActionMenu />
    </Box>
  )
}

export function ClientTable({ search }: { search: string }) {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const filtered = MOCK_CLIENTS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: 1.5 }}>
        {filtered.map((client, idx) => (
          <ClientCard key={`${client.id}-${idx}`} client={client} />
        ))}
      </Box>

      <TableContainer sx={{ display: { xs: 'none', md: 'block' } }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Client ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell sx={{ display: { md: 'none', lg: 'table-cell' } }}>NIN</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell sx={{ display: { md: 'none', lg: 'table-cell' } }}>Date Added</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((client, idx) => (
              <TableRow key={`${client.id}-${idx}`} hover>
                <TableCell>ID: {client.id}</TableCell>
                <TableCell sx={{ fontWeight: 500, color: 'text.primary' }}>{client.name}</TableCell>
                <TableCell>{client.type}</TableCell>
                <TableCell sx={{ display: { md: 'none', lg: 'table-cell' } }}>{client.nin}</TableCell>
                <TableCell>{client.contact}</TableCell>
                <TableCell sx={{ display: { md: 'none', lg: 'table-cell' } }}>{client.dateAdded}</TableCell>
                <TableCell>
                  <ActionMenu />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filtered.length * 7}
        page={page}
        onPageChange={(_, p) => setPage(p)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(e) => { setRowsPerPage(parseInt(e.target.value, 10)); setPage(0) }}
        rowsPerPageOptions={[10, 20, 50]}
        sx={{ borderTop: '1px solid', borderColor: 'divider' }}
      />
    </Box>
  )
}
