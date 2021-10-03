import React from 'react';
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  EditIcon,
  RepeatIcon,
} from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  IconButton,
} from '@chakra-ui/react';

export const HeaderMenu = () => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<HamburgerIcon />}
      variant="outline"
    />
    <MenuList>
      <MenuItem icon={<AddIcon />}>Edit</MenuItem>
      <MenuItem icon={<ExternalLinkIcon />}>New Window</MenuItem>
      <MenuItem icon={<RepeatIcon />}>Open Closed Tab</MenuItem>
      <MenuItem icon={<EditIcon />}>Open File...</MenuItem>
    </MenuList>
  </Menu>
);
