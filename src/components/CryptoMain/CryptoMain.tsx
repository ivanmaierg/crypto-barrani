import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const CryptoMain = () => (
  <Flex width="100%" alignItems="center" flexDirection="column">
    <Flex alignItems="center" flexDirection="column" width="100%" py="4rem">
      <Heading>Crypto</Heading>
      <Text marginTop="2rem" textAlign="center">
        Toda la información sobre criptos que vos necesitás
      </Text>
    </Flex>
  </Flex>
);
