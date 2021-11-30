import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = ({ children }: any) => {
  const { pathname } = useRouter();

  const bg = useColorModeValue(
    `light.background_primary`,
    `dark.background_primary`,
  );
  const { borderColor } = useColorModeValues();

  return (
    <div>
      <Head>
        <title>Crypto-Barrani</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        width="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor={bg}
        transition="background-color 200ms linear"
      >
        <Header />
        <Flex
          width="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          boxSizing="border-box"
          px={pathname === `/crypto` ? `0` : `5`}
          borderTop="1px solid"
          borderColor={borderColor}
          mt="20"
          minHeight="100vH"
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
    </div>
  );
};
export default Layout;
