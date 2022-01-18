import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { myTheme } from '@/theme/theme';
import { ThemeProvider } from '@chakra-ui/react';

const AllTheProviders: FC = ({ children }) => (
  <ThemeProvider theme={myTheme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
