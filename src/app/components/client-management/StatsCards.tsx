import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const stats = [
  { label: 'Active Clients', value: '52,284' },
  { label: 'Active Policyholders', value: '36,000' },
  { label: 'Active Policies', value: '45,373' },
]

export function StatsCards() {
  return (
    <Paper sx={{ borderRadius: 3 }}>
      <Grid container>
        {stats.map((stat, i) => (
          <Grid
            key={stat.label}
            size={{ xs: 12, sm: 4 }}
            sx={{
              px: { xs: 3, sm: 4 },
              py: 3,
              borderRight: { sm: i < stats.length - 1 ? '1px solid' : 'none' },
              borderBottom: { xs: i < stats.length - 1 ? '1px solid' : 'none', sm: 'none' },
              borderColor: 'divider',
            }}
          >
            <Typography variant="body2" color="text.secondary" fontWeight={500}>
              {stat.label}
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mt: 1.5 }}>
              {stat.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}
