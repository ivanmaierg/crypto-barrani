import React from 'react';

import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';

export const CallToAction = () => (
  <Container maxW="3xl">
    <Stack
      as={Box}
      textAlign="center"
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: `2xl`, sm: `4xl`, md: `6xl` }}
        lineHeight="110%"
      >
        Toda la data que necesitás <br />
        <Text as="span" color="green.400">
          En un solo lugar, a tu alcance
        </Text>
      </Heading>
      <Text>
        Obtené informacion sobre el país, cotizaciones del dolar, noticias
        ,exchanges , crypto y más.
      </Text>
      <Stack
        direction="column"
        spacing={3}
        align="center"
        alignSelf="center"
        position="relative"
      >
        <Button
          colorScheme="green"
          bg="green.400"
          rounded="full"
          px={6}
          _hover={{
            bg: `green.500`,
          }}
        >
          Aprendé Mas
        </Button>
      </Stack>
    </Stack>
  </Container>
);
