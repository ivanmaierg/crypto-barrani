import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';

import React from 'react';

const ButtonColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue(`light.text_primary`, `dark.text_primary`);
  if (colorMode === `light`)
    return <MoonIcon color={color} onClick={toggleColorMode} />;
  return <SunIcon color={color} onClick={toggleColorMode} />;
};

export default ButtonColorMode;
