import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ButtonColorMode from '../ButtonColorMode/ButtonColorMode';
// import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
  const bg = useColorModeValue(
    `light.background_primary`,
    `dark.background_primary`,
  );
  const color = useColorModeValue(`light.text_primary`, `dark.text_primary`);
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      bg={bg}
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
        bg={bg}
        justifyContent="space-between"
      >
        <Flex
          fontSize="30"
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
          color={color}
        >
          <h1>Crypto Barrani</h1>
        </Flex>
        <NavBar />
        <ButtonColorMode />
      </Box>
    </Flex>
  );
};
