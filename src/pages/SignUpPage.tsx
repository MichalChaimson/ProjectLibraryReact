
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PATHS } from '../routes/paths';
import { addUser } from '../services/user.service';
import { Navigate } from 'react-router-dom'; // Import Navigate from React Router
import { UserType } from '../types/user';
import { useDispatch } from 'react-redux';
import { addUserSlice } from '../redux/user/user.slice';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const [loggedIn, setLoggedIn] = React.useState(false); // State to track login status
  const dispatch = useDispatch()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    const firstName = data.get('firstName') as string;
    const lastName = data.get('lastName') as string;
    const password = data.get('password') as string;
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;

    try {
      event.preventDefault();
      await userSignUp(firstName, lastName, password, email, phone);
      setLoggedIn(true); // Set loggedIn to true upon successful login
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error
    }
  };

  const userSignUp = async (firstName: string, lastName: string, password: string, email: string, phone: string) => {
    try {
      const user: UserType = await addUser(firstName, lastName, password, email, phone);
      console.log('Login successful, token:', user);
      dispatch(addUserSlice(user))
    } catch (error) {
      throw new Error('Login failed');
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                /> */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              הרשמה
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href={PATHS.login} variant="body2">
                  יש לך כבר חשבון? התחבר
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        {loggedIn && <Navigate to={PATHS.login} />}
      </Container>
    </ThemeProvider>
  );
}

