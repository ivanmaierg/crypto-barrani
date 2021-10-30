import { Box, Flex } from '@chakra-ui/react';
// import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { useMobile } from '@/utils/hooks/useMobile';
import { NavBar } from '../NavBar/NavBar';
import { useColorModeValues } from '../../utils/hooks/useColorModeValues';

export const Header = () => {
  const { borderColor } = useColorModeValues();

  const { mobile } = useMobile(`(max-width: 480px`, []);
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      w="100%"
      py="5"
      px="5"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Box
        display="flex"
        alignSelf="flex-start"
        width="100%"
        justifyContent="space-between"
      >
        <Flex
          fontSize={mobile ? `20` : `30`}
          fontWeight="bold"
          justifyContent="center"
          alignItems="center"
        >
          <h1>Crypto Barrani</h1>
        </Flex>
        <Flex display="flex" aligItems="center" justifyContent="center">
          <NavBar />
        </Flex>
      </Box>
    </Flex>
  );
};
