import {
  useGetBlueQuery,
  useGetRiskQuery,
  useGetBlueHistoryQuery,
  useGetOficialHistoryQuery,
  useGetDaysByDidQuery,
} from '@/services/blueApi';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';
import { useMobile } from '@/utils/hooks/useMobile';
import { Flex, Text, Heading, Stack, Skeleton } from '@chakra-ui/react';
import { useReducer } from 'react';

import { Card } from '../Card/Card';
import LineChart from '../Charts/LineChart';
import { Currency } from '../Currency/Currency';

export const Main = () => {
  const { borderColor } = useColorModeValues();
  const { data: riskInfo, isFetching: isFetchingRisk } = useGetRiskQuery(``);
  const { data: blueInfo, isFetching: isFetchingBlue } = useGetBlueQuery(``);
  const { data: currencyDays, isFetching: isFetchingCurrencyDays } =
    useGetDaysByDidQuery(`5`);

  const numberOfDaysReducer = (state, action) => {
    switch (action.type) {
      case `change`:
        return { state: action.payload };
      default:
        return { state: 260 };
    }
  };

  const { isMobile } = useMobile(`(max-width: 480px`, [`column`, `row`]);
  const [numberOfDays, dispatch] = useReducer(numberOfDaysReducer, 260);
  console.log(numberOfDays);
  return (
    <Flex
      width="100%"
      alignItems="center"
      flexDirection="column"
      borderTop="1px solid"
      borderColor={borderColor}
      marginTop="4rem"
    >
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
        <Skeleton
          width={{ sm: `90%`, md: `100%` }}
          isLoaded={!isFetchingBlue && !isFetchingRisk}
        >
          {!isFetchingBlue && !isFetchingRisk && (
            <>
              <Currency blueInfo={blueInfo} />
              <Stack w="100%" spacing={4} direction={isMobile}>
                {!isFetchingRisk && (
                  <Card title="Riesgo País" value={riskInfo.value} />
                )}
                {!isFetchingBlue && (
                  <Card
                    title="Brecha Cambiaria"
                    value={`${(
                      (blueInfo.usd.oficial.value_sell /
                        blueInfo.usd.blue.value_sell) *
                      100
                    ).toFixed(2)} %`}
                  />
                )}
              </Stack>
            </>
          )}
        </Skeleton>
        <Skeleton isLoaded={!isFetchingCurrencyDays} mt="2rem" width="100%">
          {!isFetchingCurrencyDays && (
            <LineChart dispatch={dispatch} days={currencyDays} />
          )}
        </Skeleton>
      </Flex>
    </Flex>
  );
};
