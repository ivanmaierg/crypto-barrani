import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

export interface Props {
  bgColor: string;
  label: string;
  value: string | number;
}

export default function CurrencyStat({
  bgColor,
  label,
  value,
}: Props): ReactElement {
  return (
    <Stat borderRadius="md" py="2.5" bgColor={bgColor}>
      <StatLabel>{label}</StatLabel>
      <StatNumber>ARS {value} $</StatNumber>
    </Stat>
  );
}
