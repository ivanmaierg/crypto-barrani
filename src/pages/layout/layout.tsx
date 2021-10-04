import { Header } from '@/components/Header/Header';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Layout: React.FC<any> = ({ children }) => {
  const bg = useColorModeValue(
    `light.background_primary`,
    `dark.background_primary`,
  );
  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={bg}
    >
      <Header />
      <Flex
        width="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        boxSizing="border-box"
      >
        <>{children}</>
      </Flex>
    </Flex>
  );
};
