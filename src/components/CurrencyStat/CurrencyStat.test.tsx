import { render } from '@/test-utils';
import '@testing-library/jest-dom';
import React from 'react';
import CurrencyStat, { Props } from './CurrencyStat';

test(`CurrencyStat should render content`, () => {
  const currencyStatProps: Props = {
    bgColor: `#e9f2ff`,
    label: `title`,
    value: `5`,
  };
  const component = render(
    <CurrencyStat
      bgColor={currencyStatProps.bgColor}
      label={currencyStatProps.label}
      value={currencyStatProps.value}
    />,
  );
  component.findAllByText(`5`);
  component.findAllByLabelText(`title`);
});
