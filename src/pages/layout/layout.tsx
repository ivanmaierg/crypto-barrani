import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import React from 'react';

const Layout = ({ children }: any) => {
  const bg = useColorModeValue(
    `light.background_primary`,
    `dark.background_primary`,
  );
  const { borderColor } = useColorModeValues();
  return (
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
        justifyContent="center"
        alignItems="center"
        boxSizing="border-box"
        px="5"
        borderTop="1px solid"
        borderColor={borderColor}
        mt="20"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};
export default Layout;
