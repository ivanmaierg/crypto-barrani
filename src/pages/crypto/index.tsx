import { useGetCryptosQuery } from '@/services/cryptoApi';
import { Box } from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';
import { Layout } from '../layout/layout';

export default function Crypto(): ReactElement {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(``);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  return (
    <>
      <Box>Hola</Box>
    </>
  );
}
