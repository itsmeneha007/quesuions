import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box p={6}>
      <Heading>Contact Us</Heading>
      <Text mt={4}>Email: contact@company.com</Text>
      <Text>Phone: +1 234 567 890</Text>
    </Box>
  );
};

export default Contact;