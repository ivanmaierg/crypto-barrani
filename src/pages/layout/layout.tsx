import { Header } from '@/components/Header/Header';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export const Layout: React.FC<any> = ({ children }) => (
  <Flex
    width="100%"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
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
