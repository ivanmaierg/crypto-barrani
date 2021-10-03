import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import { Card } from '../Card/Card';
import { Currency } from '../Currency/Currency';

import { ComponentWrapper } from '../Wrappers/Wrappers';

export const Main = () => (
  <Flex alignItems="center" justifyContent="center" flexDirection="column">
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      borderBottom="1px solid"
      borderColor="l_border_blue"
      width="100%"
      backgroundColor="white"
      py="5rem"
    >
      <Heading color="l_text_blue_strong">Arg Analytics</Heading>
      <Text>
        Obtene las diferentes cotizaciones del dólar, euro, reservas, evolucion
        y riesgo pais.
      </Text>
    </Flex>
    <Currency />
    <ComponentWrapper>
      <Card />
      <Card />
    </ComponentWrapper>
  </Flex>
);
