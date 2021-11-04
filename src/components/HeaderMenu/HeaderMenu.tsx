import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuIcon,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
import ButtonColorMode from '../ButtonColorMode/ButtonColorMode';

export const HeaderMenu = ({ children }: any) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<HamburgerIcon />}
      variant="solid"
      m="auto"
    />
    <MenuList
      backgroundColor="light.background_secondary"
      color="light.text_primary"
      p="2"
      width="100%"
    >
      <MenuIcon>
        <ButtonColorMode />
      </MenuIcon>
      <MenuDivider />
      {children}
    </MenuList>
  </Menu>
);
