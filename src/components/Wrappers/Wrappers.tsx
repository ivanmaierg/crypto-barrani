import { Box, chakra } from '@chakra-ui/react';

export const ComponentWrapper = chakra(Box, {
  baseStyle: {
    display: `flex`,
    width: `65%`,
    justifyContent: `center`,
    p: 0,
    flexDirection: `row`,
    alignItems: `center`,
    gap: `1rem`,
    mt: 5,
  },
});
