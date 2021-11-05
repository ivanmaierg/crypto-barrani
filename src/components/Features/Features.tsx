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
    <Box p={4} maxW="80%">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
          title="Cotizaciones del dolar"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcBullish} w={10} h={10} />}
          title="Crypto, simulaciones APY"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
        <Feature
          icon={<Icon as={FcNews} w={10} h={10} />}
          title="Noticias"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
        />
      </SimpleGrid>
    </Box>
  );
}