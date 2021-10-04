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
      width="100%"
      py="5rem"
    >
      <Heading>Arg Analytics</Heading>
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
