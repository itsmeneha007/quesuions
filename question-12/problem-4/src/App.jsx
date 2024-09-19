import React from 'react';
import { ChakraProvider, Box, SimpleGrid, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ResponsiveCard from './components/ResponsiveCard';

const App = () => {
  return (
    <ChakraProvider>
      <Box>
        <Navbar />
        <Container maxW="container.lg" mt={8}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
            <ResponsiveCard />
            <ResponsiveCard />
            <ResponsiveCard />
            <ResponsiveCard />
          </SimpleGrid>
        </Container>
      </Box>
    </ChakraProvider>
  );
};

export default App;