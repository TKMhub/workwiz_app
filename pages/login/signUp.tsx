import React from 'react';
import { Button, TextField, Box, Typography, Link } from '@mui/material';

const SignUp = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
        mt: 8,
        p: 4,
        boxShadow: 2,
        borderRadius: 1,
        bgcolor: 'background.paper',
      }}
      noValidate
    >
      <Typography component="h1" variant="h5" mb={3}>
        Sign Up
      </Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ mb: 2 }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        sx={{ mb: 2 }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        autoComplete="new-password"
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Link href="#" variant="body2" sx={{ mt: 2 }}>
        Already have an account? Sign In
      </Link>
    </Box>
  );
};

export default SignUp;

