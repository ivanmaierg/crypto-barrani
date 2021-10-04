import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const Card = () => (
  <Box
    width="100%"
    borderRadius="md"
    display="block"
    flexDirection="column"
    m="auto"
    textAlign="center"
    pl={4}
    pr={4}
    minWidth="10rem"
    maxWidth="100%"
  >
    <Heading as="h2" size="xl" fontSize="3xl">
      Riesgo País
    </Heading>
    <Stack spacing={2} isInline justifyContent="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="red.400"
        borderRadius={4}
      >
        <Text
          textAlign="left"
          lineHeight={10}
          display="flex"
          width="100%"
          m="auto"
          pl="2"
          pr="2"
        >
          ARS:85.01$
        </Text>
      </Box>
    </Stack>
    <Text color="gray.600">Oficial - Blue</Text>
  </Box>
);
