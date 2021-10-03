import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: `30em`,
  md: `56em`,
  lg: `91em`,
  xl: `120em`,
});

export const myTheme = extendTheme({
  breakpoints,
  shadows: { l_shadow: `0 15px 50px #e4eeff` },
  colors: {
    l_blue_background: `#e7f0ff`,
    l_border_blue: `#cee1ff`,
    l_secondary_color: `#e9f2ff`,
    l_strong_blue: `#0060ff`,
    l_text_blue_strong: `#002358`,
    l_text_blue_medium: `#264d89`,
    d_background_dark: `#001b32`,
    d_background_primary: `#001b44`,
    d_background_light: `#001b44`,
    d_text_primary: `white`,
    d_text_secondary: `#b3d1ff`,
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: `l_blue_background`,
        boxSizing: `border-box`,
        color: `l_text_blue_medium`,
      },
    },
  },
});
