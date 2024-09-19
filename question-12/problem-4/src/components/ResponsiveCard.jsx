import { Box, Image, Text, Stack, Button } from '@chakra-ui/react';

const ResponsiveCard = () => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      m={4}
    >
      <Image
        src="https://via.placeholder.com/150"
        alt="Product Image"
        objectFit="cover"
        w="100%"
        h="200px"
      />

      <Box p="6">
        <Stack spacing={3}>
          <Text fontSize="xl" fontWeight="bold">Product Title</Text>
          <Text>Product description goes here. This is a brief overview of the product features.</Text>
          <Button colorScheme="blue" variant="solid">Buy Now</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ResponsiveCard;