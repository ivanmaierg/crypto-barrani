import { Stack, Box, Heading, Skeleton } from '@chakra-ui/react';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';
import CurrencyStat from '../CurrencyStat/CurrencyStat';

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
  const { bgTertiary } = useColorModeValues();
  const { value_avg: avg, value_sell: sell, value_buy: buy } = currency || {};
  const isLoaded = !!currency;
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
        <Skeleton isLoaded={isLoaded}>
          <CurrencyStat value={buy} bgColor={bgTertiary} label="Compra" />
        </Skeleton>
        <Skeleton isLoaded={isLoaded}>
          <CurrencyStat value={avg} bgColor={bgTertiary} label="Promedio" />
        </Skeleton>
        <Skeleton isLoaded={isLoaded}>
          <CurrencyStat value={sell} bgColor={bgTertiary} label="Venta" />
        </Skeleton>
      </Stack>
    </Box>
  );
};
