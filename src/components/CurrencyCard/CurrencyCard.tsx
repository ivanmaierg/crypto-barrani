import { Stack, Box, Text, Heading } from '@chakra-ui/react';
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons';

export const CurrencyCard = () => (
  <Box
    minWidth="10rem"
    maxWidth="100%"
    w="100%"
    borderRadius="md"
    p={5}
    overflow="hidden"
    display="flex"
    flexDirection="column"
    flexWrap="wrap"
    textAlign="center"
  >
    <Box>
      <Heading as="h2" size="xl" fontSize="3xl" color="l_text_blue_strong">
        Blue
      </Heading>
    </Box>
    <Stack spacing={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pl={2}
        pr={2}
      >
        <Text
          textAlign="left"
          lineHeight={10}
          display="flex"
          width="100%"
          m="auto"
          mr={5}
        >
          Compra: 180.00$
        </Text>
        <TriangleDownIcon color="bla" />
      </Box>
      <Box display="flex" justifyContent="center" pl={2} pr={2}>
        <Text
          textAlign="left"
          lineHeight={10}
          display="flex"
          width="100%"
          m="auto"
        >
          Promedio:175.00$
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        pl={2}
        pr={2}
      >
        <Text
          textAlign="left"
          lineHeight={10}
          display="flex"
          width="100%"
          m="auto"
        >
          Compra: 180.00$
        </Text>
        <TriangleDownIcon />
      </Box>
    </Stack>
  </Box>
);
