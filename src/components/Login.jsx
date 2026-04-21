import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Paper,
  InputAdornment,
  IconButton,
  Link,
  Stack
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff, 
  Email, 
  Lock 
} from '@mui/icons-material';

export default function Login({ setView, onLoginSuccess }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper 
      elevation={10} 
      sx={{ 
        p: { xs: 4, md: 6 }, 
        borderRadius: 4, 
        width: '100%', 
        maxWidth: 450,
        bgcolor: 'background.paper',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}
    >
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
          ¡Hola de nuevo!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ingresa tus credenciales para continuar
        </Typography>
      </Box>

      <Stack spacing={3}>
        <TextField
          fullWidth
          label="Correo Electrónico"
          variant="outlined"
          placeholder="ejemplo@correo.com"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          fullWidth
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          placeholder="••••••••"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock color="action" />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="#" underline="hover" color="primary" variant="body2">
            ¿Olvidaste tu contraseña?
          </Link>
        </Box>

        <Button 
          variant="contained" 
          size="large" 
          disableElevation
          onClick={() => onLoginSuccess()}
          sx={{ 
            py: 1.5, 
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            transition: '0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
            }
          }}
        >
          Iniciar Sesión
        </Button>
      </Stack>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          ¿No tienes una cuenta?{' '}
          <Link 
            component="button" 
            variant="body2" 
            onClick={() => setView('register')}
            fontWeight="bold"
            underline="hover"
          >
            Regístrate aquí
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
}