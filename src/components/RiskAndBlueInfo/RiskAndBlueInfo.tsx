import { BlueData, CountryRisk } from '@/types/Blue';
import { Skeleton, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Card } from '../Card/Card';

interface Props {
  riskInfo?: CountryRisk;
  blueInfo?: BlueData;
}

export default function RiskAndBlueInfo({
  riskInfo,
  blueInfo,
}: Props): ReactElement {
  const brecha: string =
    (blueInfo &&
      `${(
        ((blueInfo.usd.blue.value_sell - blueInfo.usd.oficial.value_sell) /
          blueInfo.usd.oficial.value_sell) *
        100
      ).toFixed(2)} %`) ||
    ``;

  const riesgo = riskInfo && `${Number(riskInfo.value).toFixed(2)} Puntos`;

  const isLoaded = !!riskInfo && !!blueInfo;
  return (
    <Stack
      w="100%"
      spacing={4}
      direction={{ base: `column`, sm: `row` }}
      transition="all 2ms"
    >
      <Skeleton w="100%" isLoaded={isLoaded}>
        <Card title="Riesgo País" value={riesgo} />
      </Skeleton>
      <Skeleton w="100%" isLoaded={isLoaded}>
        <Card title="Brecha Cambiaria" value={brecha} />
      </Skeleton>
    </Stack>
  );
}
