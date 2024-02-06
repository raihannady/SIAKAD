import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
// import { encryptPayload } from '@utils/encryptPayload';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import classes from './style.module.scss';
import { register } from './actions';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleChange = (value, type) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
    };
    dispatch(register(dataUser));
    navigate('/login');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" className={classes.container}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <Typography component="h1" variant="h5" className={classes.title}>
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fullname"
              label="Full Name"
              name="fullname"
              autoComplete="fullname"
              autoFocus
              onChange={(e) => handleChange(e.target.value, 'fullname')}
              variant="filled"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // autoComplete="email"
              autoFocus
              onChange={(e) => handleChange(e.target.value, 'email')}
              variant="filled"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              // autoComplete="current-password"
              onChange={(e) => handleChange(e.target.value, 'password')}
              variant="filled"
              size="small"
            />
            <Button
              type="submit"
              size="small"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, textTransform: 'none' }}
              className={classes.button}
            >
              Register
            </Button>
            <Box className={classes.footer}>
              <Link to="/login" className={classes.link}>
                Already have an account? Sign In
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
