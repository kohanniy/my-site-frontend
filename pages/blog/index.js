import React from 'react';
import { Container, Stack, Box, Typography } from '@mui/material';
import Nav from '../../src/components/Nav';
import Footer from '../../src/components/Footer';
import PageTransition from '../../src/components/PageTransition';

const Blog = () => {
  return (
    <Container component={PageTransition} maxWidth='lg'>
      <Stack
        spacing={2}
        sx={{ minHeight: '100vh', p: '20px 0 0' }}
      >
        <Nav addLinkToHome />
        <Box
          component='main'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Typography variant='h1' component='h1'>
            Скоро тут будут статьи
          </Typography>
        </Box>
        <Footer />
      </Stack>
    </Container>
  );
}

export default Blog;
