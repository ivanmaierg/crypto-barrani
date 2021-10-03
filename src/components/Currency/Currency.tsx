import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CurrencyCard } from '../CurrencyCard/CurrencyCard';
import { ComponentWrapper } from '../Wrappers/Wrappers';

export const Currency = (props: any) => (
  <Flex
    flexDirection="column"
    alignItems="center"
    width="100%"
    boxSizing="border-box"
  >
    <Button>USD</Button>
    <ComponentWrapper>
      <CurrencyCard />
      <CurrencyCard />
    </ComponentWrapper>
    <Box m={2}>
      <Text>Last Update: 10/09/2021</Text>
    </Box>
  </Flex>
);
