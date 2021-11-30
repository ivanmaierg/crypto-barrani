import { render } from '@/test-utils';
import React from 'react';
import { CurrencyCard, CurrencyCardProps } from './CurrencyCard';

test(`CurrencyCard should be render content`, () => {
  const currencyCardProps: CurrencyCardProps = {
    currency: {
      value_avg: `avg`,
      value_sell: `sell`,
      value_buy: `buy`,
    },
    title: `title`,
  };

  const component = render(
    <CurrencyCard
      currency={currencyCardProps.currency}
      title={currencyCardProps.title}
    />,
  );
  component.getByText(/avg/);
  component.getByText(/sell/);
  component.getByText(/buy/);
  component.getByText(`title`);
});

test(`CurrencyCard should be loading`, () => {
  const currencyCardProps = {
    title: `title`,
    currency: {
      value_avg: `avg`,
      value_sell: `sell`,
      value_buy: `buy`,
    },
  };
  const component = render(
    <CurrencyCard
      currency={currencyCardProps.currency}
      title={currencyCardProps.title}
    />,
  );
});
