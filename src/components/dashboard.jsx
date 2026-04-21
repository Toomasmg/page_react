import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  AppBar,
  Toolbar,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Dashboard = ({ onLogout }) => {
  // Datos mockeados
  const stats = [
    { title: 'Usuarios', value: '1,234', icon: PeopleIcon, color: '#6366f1' },
    { title: 'Proyectos', value: '42', icon: AssignmentIcon, color: '#ec4899' },
    { title: 'Reportes', value: '89', icon: BarChartIcon, color: '#8b5cf6' },
  ];

  const tableData = [
    { id: 1, nombre: 'Juan García', proyecto: 'Sistema Login', estado: 'Completado' },
    { id: 2, nombre: 'María López', proyecto: 'Dashboard', estado: 'En Progreso' },
    { id: 3, nombre: 'Carlos Ruiz', proyecto: 'API REST', estado: 'Pendiente' },
    { id: 4, nombre: 'Ana Martínez', proyecto: 'Frontend', estado: 'Completado' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f3f4f6' }}>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: '#6366f1' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Dashboard
          </Typography>
          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={onLogout}
            sx={{ textTransform: 'none' }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#1f2937' }}>
          Bienvenido al Dashboard
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', boxShadow: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          bgcolor: stat.color,
                          borderRadius: 2,
                          p: 1.5,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon sx={{ color: 'white', fontSize: 28 }} />
                      </Box>
                      <Box>
                        <Typography color="textSecondary" variant="body2">
                          {stat.title}
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {stat.value}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Tabla */}
        <Card sx={{ boxShadow: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              Últimas Actividades
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: '#f3f4f6' }}>
                    <TableCell sx={{ fontWeight: 700 }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Nombre</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Proyecto</TableCell>
                    <TableCell sx={{ fontWeight: 700 }}>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.nombre}</TableCell>
                      <TableCell>{row.proyecto}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: 'inline-block',
                            bgcolor:
                              row.estado === 'Completado'
                                ? '#dcfce7'
                                : row.estado === 'En Progreso'
                                ? '#fef3c7'
                                : '#fee2e2',
                            color:
                              row.estado === 'Completado'
                                ? '#166534'
                                : row.estado === 'En Progreso'
                                ? '#92400e'
                                : '#991b1b',
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                          }}
                        >
                          {row.estado}
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;