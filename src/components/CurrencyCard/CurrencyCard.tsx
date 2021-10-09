import { Stack, Box, Text, Heading } from '@chakra-ui/react';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';

export interface Currency {
  value_buy: string;
  value_avg: string;
  value_sell: string;
}
export interface CurrencyCardProps {
  currency: Currency;
  title: string;
}

export const CurrencyCard: React.FC<CurrencyCardProps> = ({
  currency,
  title,
}: CurrencyCardProps) => {
  const { bgTertiary, borderColor } = useColorModeValues();
  const { value_avg: avg, value_sell: sell, value_buy: buy } = currency;
  return (
    <Box
      minWidth="10rem"
      w="100%"
      borderRadius="md"
      p={5}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      textAlign="center"
      backgroundColor={bgTertiary}
    >
      <Box>
        <Heading as="h2" size="xl" fontSize="3xl" color="l_text_blue_strong">
          {title}
        </Heading>
      </Box>
      <Stack spacing={2}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="2"
          borderColor={borderColor}
          borderBottom="1px solid"
        >
          <Text
            textAlign="left"
            lineHeight={10}
            display="flex"
            width="100%"
            m="auto"
            mr={5}
          >
            Compra: {buy}
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          p="2"
          borderColor={borderColor}
          borderBottom="1px solid"
        >
          <Text
            textAlign="left"
            lineHeight={10}
            display="flex"
            width="100%"
            m="auto"
          >
            Promedio:{avg}
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          p="2"
          borderColor={borderColor}
          borderBottom="1px solid"
        >
          <Text
            textAlign="left"
            lineHeight={10}
            display="flex"
            width="100%"
            m="auto"
          >
            Venta: {sell}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
