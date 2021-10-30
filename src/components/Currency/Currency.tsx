import { useMobile } from '@/utils/hooks/useMobile';
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  StackDirection,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { CurrencyCard } from '../CurrencyCard/CurrencyCard';

export const Currency = ({ blueInfo }: any) => {
  const { isMobile } = useMobile<StackDirection>(`(max-width: 480px`, [
    `column`,
    `row`,
  ]);
  const [toogle, setToogle] = useState(false);
  const handleToogleCurrency = () => {
    setToogle(!toogle);
  };
  const getCurrency = () => (toogle ? blueInfo.eur : blueInfo.usd);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      boxSizing="border-box"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Text fontSize="3xl" fontWeight="bold">
          {toogle ? `Eur` : `Usd`}
        </Text>
        <Button alignSelf="flex-end" onClick={handleToogleCurrency}>
          {toogle ? `Eur` : `Usd`}
        </Button>
      </Flex>

      <Stack w="100%" direction={isMobile} spacing={4} mt="1rem">
        <CurrencyCard title="Oficial" currency={getCurrency().oficial} />
        <CurrencyCard title="Blue" currency={getCurrency().blue} />
      </Stack>
      <Box m={2}>
        <Text fontWeight="bold">Last Update: 10/09/2021</Text>
      </Box>
    </Flex>
  );
};
