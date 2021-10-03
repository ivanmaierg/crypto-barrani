import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { myTheme } from '@/theme/theme';
import { store } from '@/app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log(myTheme);
  return (
    <Provider store={store}>
      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
