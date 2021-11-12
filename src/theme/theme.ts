import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: `30em`,
  md: `56em`,
  lg: `91em`,
  xl: `120em`,
});

export const myTheme = extendTheme({
  initialColorMode: `light`,
  useSystemColorMode: false,
  breakpoints,
  shadows: { l_shadow: `0 15px 50px #e4eeff` },
  colors: {
    light: {
      background_primary: `white`,
      background_secondary: `#e7f0ff`,
      background_tertiary: `#e9f2ff`,
      border: `#cee1ff`,
      dark_blue: `#002358`,
      md_blue: `#264d89`,
      text_primary: `#002358`,
      text_secondary: `#264d89`,
    },
    dark: {
      background_primary: `#001b44`,
      background_secondary: `#001432`,
      background_tertiary: `#032c6b`,
      border: `#173e7b`,
      text_primary: `white`,
      text_secondary: `#b3d1ff`,
    },
    blueAccent: `#126bff`,
    grenAccent: `#5bffa8`,
    redAccent: `#ff314a`,
  },
  styles: {
    global: (props: any) => ({
      // styles for the `body`
      body: {
        overflowX: `hidden`,
        color:
          props.colorMode === `light`
            ? `light.text_primary`
            : `dark.text_primary`,
        backgroundColor:
          props.colorMode === `light`
            ? `light.background_primary`
            : `dark.background_primary`,
        boxSizing: `border-box`,
        borderColor:
          props.colorMode === `light` ? `light.border` : `dark.border`,
      },
    }),
  },
});
