import { Box, Flex } from '@chakra-ui/react';
// import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { NavBar } from '../NavBar/NavBar';

export const Header = () => (
  <Flex
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    backgroundColor="white"
    w="100%"
    py="5"
    px="5"
    borderBottom="1px solid"
    borderColor="l_border_blue"
  >
    <Box
      display="flex"
      alignSelf="flex-start"
      width="100%"
      backgroundColor="white"
      justifyContent="space-between"
    >
      <Flex
        fontSize="30"
        color="l_text_blue_strong"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
      >
        <h1>Crypto Barrani</h1>
      </Flex>
      <NavBar />
    </Box>
  </Flex>
);
