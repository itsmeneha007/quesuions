import { Link } from 'react-router-dom';
import { Box, HStack, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bg="blue.600" p={4}>
      <HStack spacing={8} justifyContent="center">
        <Button as={Link} to="/" colorScheme="blue" variant="solid">
          Home
        </Button>
        <Button as={Link} to="/about" colorScheme="blue" variant="solid">
          About
        </Button>
        <Button as={Link} to="/products" colorScheme="blue" variant="solid">
          Products
        </Button>
        <Button as={Link} to="/contact" colorScheme="blue" variant="solid">
          Contact
        </Button>
      </HStack>
    </Box>
  );
};

export default Navbar;