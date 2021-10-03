import { Box } from '@chakra-ui/react';
import React from 'react';

import { CurrencyCard } from './CurrencyCard';

export default {
  component: CurrencyCard,
  title: `CurrencyCard`,
};

const Template = (args: any) => (
  <Box w="50%">
    <CurrencyCard {...args} />
  </Box>
);

export const Default = Template.bind({});
