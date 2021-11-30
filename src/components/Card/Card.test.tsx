import { render } from '@/test-utils';
import React from 'react';
import { Card } from './Card';

test(`Card component should render content`, () => {
  const cardProps = {
    title: `title`,
    value: `10`,
    textFooter: `footer`,
  };
  const component = render(
    <Card
      title={cardProps.title}
      value={cardProps.value}
      textFooter={cardProps.textFooter}
    />,
  );
  component.getByText(`title`);
  component.getByText(`10`);
  component.getByText(`footer`);
});
