import { getHistory, getLatestBlue, getRisk } from '@/utils/getData';
import { useMobile } from '@/utils/hooks/useMobile';
import { Flex, Text, Heading, StackDirection } from '@chakra-ui/react';
import useSWR from 'swr';

import { LineChart } from '../Charts/LineChart';
import { Currency } from '../Currency/Currency';
import RiskAndBlueInfo from '../RiskAndBlueInfo/RiskAndBlueInfo';

export const ArgAnalytics = () => {
  const { data: blueInfo } = useSWR(`api/blue`, getLatestBlue);

  const { data: riskInfo } = useSWR(`api/blue/risk`, getRisk);
  const { data: currencyOficialDays } = useSWR(`/oficial`, getHistory);
  const { data: currencyBlueDays } = useSWR(`/blue`, getHistory);
  const [, mobile] = useMobile<StackDirection>(
    `(min-width: 10px) and (max-width: 480px)`,
    [`column`, `row`],
  );
  return (
    <Flex width="100%" alignItems="center" flexDirection="column">
      <Flex
        alignItems="center"
        flexDirection="column"
        width={{ sm: `100%`, md: `85%` }}
        maxWidth={{ md: `720px`, lg: `1280px` }}
        px={{ sm: `2rem`, md: `5rem` }}
      >
        <Flex alignItems="center" flexDirection="column" width="100%" py="4rem">
          <Heading>Arg. Analytics</Heading>
          <Text marginTop="2rem" textAlign="center">
            Obtené las diferentes cotizaciones del dólar, euro, reservas,
            evolución y riesgo país.
          </Text>
        </Flex>
        <Flex w="100%" direction="column">
          <Currency blueInfo={blueInfo} />
          <RiskAndBlueInfo riskInfo={riskInfo} blueInfo={blueInfo} />
        </Flex>
        {!mobile && (
          <LineChart
            blueHistory={currencyBlueDays}
            oficialHistory={currencyOficialDays}
          />
        )}
      </Flex>
    </Flex>
  );
};
