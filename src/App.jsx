import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Container } from '@mui/material';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#ec4899',
    },
    background: {
      default: '#f3f4f6',
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
  const [currentView, setCurrentView] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Box 
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isLoggedIn 
            ? '#f3f4f6' 
            : 'linear-gradient(135deg, #e0e7ff 0%, #fce7f3 100%)',
          padding: 2
        }}
      >
        <Container maxWidth={isLoggedIn ? 'lg' : 'sm'}>
          {isLoggedIn ? (
            <Dashboard onLogout={handleLogout} />
          ) : currentView === 'login' ? (
            <Login setView={setCurrentView} onLoginSuccess={handleLoginSuccess} />
          ) : (
            <Register setView={setCurrentView} />
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;