import { getCoins } from '@/utils/getData';
import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import { CryptoTable } from '../Table/CryptoTable';

export const CryptoMain = () => {
  const { data: coinsInfo } = useSWR(`api/crypto/coins`, getCoins);
  return (
    <Flex
      alignItems="center"
      h="100%"
      justifyContent="flex-start"
      flexDirection="column"
      width="100%"
    >
      <Heading my="10" h="100%">
        Crypto
      </Heading>
      <Text marginTop="5" h="100%" textAlign="center">
        Toda la información sobre criptos que vos necesitás
      </Text>
      <Heading my="10">Precio de las criptomonedas</Heading>
      {!coinsInfo ? `Loading...` : <CryptoTable />}
    </Flex>
  );
};
