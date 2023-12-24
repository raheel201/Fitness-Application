import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="100px" bgcolor="#fff" borderTop="3px solid #515052">
      <Stack gap="40px" alignItems="center" px="40px" pt="30px">
        <img src={Logo} alt="logo" width="230px" height="60px" />
        <Typography variant='h5' pb="40px" mt="20px" fontWeight="bold">
        © GYM PULSE - Igniting Wellness Worldwide
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
