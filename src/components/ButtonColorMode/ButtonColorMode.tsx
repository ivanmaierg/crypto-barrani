import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

const ButtonColorMode: React.FC = () => {
  const textColor = useColorModeValue(`dark.textPrimary`, `light.textPrimary`);
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === `dark`)
    return (
      <SunIcon cursor="pointer" color={textColor} onClick={toggleColorMode} />
    );
  return (
    <MoonIcon cursor="pointer" color={textColor} onClick={toggleColorMode} />
  );
};

export default ButtonColorMode;
