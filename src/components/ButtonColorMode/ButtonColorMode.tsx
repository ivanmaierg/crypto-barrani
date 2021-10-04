import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';

import { useColorModeValues } from '../../utils/hooks/useColorModeValues';

const ButtonColorMode = () => {
  const { textPrimary } = useColorModeValues();
  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === `light`)
    return <MoonIcon color={textPrimary} onClick={toggleColorMode} />;
  return <SunIcon color={textPrimary} onClick={toggleColorMode} />;
};

export default ButtonColorMode;
