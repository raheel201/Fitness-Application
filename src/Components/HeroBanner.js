import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
      <Typography color="#515052" fontWeight="600" fontSize="26px" mb={2}>
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{fontSize: {lg: '44px', xs: '40px'}}}
      >
        Strive, Thrive <br/> and Ignite
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4} mt={3}>
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" style={{backgroundColor: "#ff312e"}}>
        Explore the exercises
      </Button>
      <Typography
      fontWeight="600"
      color="#515052"
      sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
      }}
      fontSize="250px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' style={{height: '850px', width: '650px', borderRadius: '0 0 0 100px'}}
      />


    </Box>
  )
}

export default HeroBanner
