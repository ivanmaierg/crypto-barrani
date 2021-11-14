import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcCurrencyExchange, FcBullish, FcNews } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => (
  <Stack>
    <Flex
      w={16}
      h={16}
      align="center"
      justify="center"
      color="white"
      rounded="full"
      bg="gray.100"
      mb={1}
    >
      {icon}
    </Flex>
    <Text fontWeight={600}>{title}</Text>
    <Text>{text}</Text>
  </Stack>
);

export default function Features() {
  return (
    <Box
      p={4}
      maxW="80%"
      margin="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
          title="Cotizaciones del dolar"
          text="Obtené toda la información crucial sobre las variables macroeconomicas de tu país."
        />
        <Feature
          icon={<Icon as={FcBullish} w={10} h={10} />}
          title="Crypto, simulaciones APY"
          text="Toda la información sobre las criptos del momento, cotizaciones, volumen, exchanges y más."
        />
        <Feature
          icon={<Icon as={FcNews} w={10} h={10} />}
          title="Noticias"
          text="Recibí toda la data actualizada y de último momento sobre el ecosistema cripto."
        />
      </SimpleGrid>
    </Box>
  );
}
