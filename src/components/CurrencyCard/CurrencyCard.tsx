import {
  Stack,
  Box,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
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
      p={0}
      overflow="hidden"
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      textAlign="center"
    >
      <Box>
        <Heading as="h2" size="xl" fontSize="3xl" color="l_text_blue_strong">
          {title}
        </Heading>
      </Box>
      <Stack mt={4} spacing={4} fontSize="2xl" w="100%">
        <Stat borderTopRadius="md" overflow="hidden" bgColor={bgTertiary}>
          <StatLabel>Compra</StatLabel>
          <StatNumber>ARS {buy}</StatNumber>
        </Stat>
        <Stat borderRadius="md" bgColor={bgTertiary}>
          <StatLabel>Promedio</StatLabel>
          <StatNumber>ARS {avg}</StatNumber>
        </Stat>
        <Stat borderBottomRadius="md" bgColor={bgTertiary}>
          <StatLabel>Venta</StatLabel>
          <StatNumber>ARS {sell}</StatNumber>
        </Stat>
      </Stack>
    </Box>
  );
};
