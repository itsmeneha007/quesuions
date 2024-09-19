import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={6}>
      <Heading>Welcome to the Home Page</Heading>
      <Text mt={4}>This is the home page of the application.</Text>
    </Box>
  );
};

export default Home;