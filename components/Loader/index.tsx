// Loader.tsx
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <CircularProgress size={60} /> {/* スピナーのサイズを2倍に設定 */}
  </Box>
);

export default Loader;

