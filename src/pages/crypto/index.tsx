// import { useGetCryptosQuery } from '@/services/cryptoApi';
import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Layout from '../layout/layout';

export default function Crypto(): ReactElement {
  // const { data: cryptosList, isFetching } = useGetCryptosQuery(``);
  return (
    <>
      <Layout>
        <Box>Hola</Box>
      </Layout>
    </>
  );
}
