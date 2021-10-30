/* eslint-disable import/named */
import { Box } from '@chakra-ui/react';
import React from 'react';

import { Card } from './Card';

// export default {
//   component: Card,
//   title: `Card`,
// };

const Template = (args: any) => (
  <Box w="50%">
    <Card {...args} />
  </Box>
);

export const Default = Template.bind({});
