import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from '@/theme/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={myTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
