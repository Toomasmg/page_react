import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';

// Creamos un tema personalizado para un diseño más "premium"
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Indigo vibrante
    },
    secondary: {
      main: '#ec4899', // Pink vibrante
    },
    background: {
      default: '#f3f4f6', // Gris muy claro
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  // Manejamos el estado para cambiar entre "login" y "register"
  const [currentView, setCurrentView] = useState('login');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Contenedor principal que ocupa toda la pantalla con un gradiente de fondo */}
      <Box 
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
          padding: 2
        }}
      >
        <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center' }}>
          {currentView === 'login' ? (
            <Login setView={setCurrentView} />
          ) : (
            <Register setView={setCurrentView} />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
