import { BlueData, CountryRisk } from '@/types/Blue';
import { Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Card } from '../Card/Card';

interface Props {
  riskInfo: CountryRisk;
  blueInfo: BlueData;
}

export default function RiskAndBlueInfo({
  riskInfo,
  blueInfo,
}: Props): ReactElement {
  return (
    <Stack
      w="100%"
      spacing={4}
      direction={{ base: `column`, sm: `row` }}
      transition="all 2ms"
    >
      <Card
        title="Riesgo País"
        value={`${Number(riskInfo.value).toFixed(2)} Puntos`}
      />
      <Card
        title="Brecha Cambiaria"
        value={`${(
          ((blueInfo.usd.blue.value_sell - blueInfo.usd.oficial.value_sell) /
            blueInfo.usd.oficial.value_sell) *
          100
        ).toFixed(2)} %`}
      />
    </Stack>
  );
}
