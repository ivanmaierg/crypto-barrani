import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  Heading,
} from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart({ days, dispatch }): ReactElement {
  const data = {
    labels: ``,
    datasets: [
      {
        label: `Price In USD`,
        data: days.map((day) => day.value_buy),
        fill: false,
        backgroundColor: `#0071bd`,
        borderColor: `#0071bd`,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            type: `linear`,
            display: true,
            position: `left`,
            id: `y-axis-1`,
          },
        },
      ],
    },
  };
  const handleOnSelect = (e) => {
    const action = {
      payload: e.target.value,
      type: `change`,
    };
    dispatch(action);
    e.preventDefault();
  };
  return (
    <>
      <FormControl display="flex" justifyContent="start">
        <FormLabel>
          <Select
            name="quantity"
            onChange={(e) => {
              handleOnSelect(e);
            }}
          >
            <option value="monthly">Mensual</option>
            <option value="yearly">Anual</option>
            <option value="quarteryearly">4 años</option>
            <option value="all">Todo</option>
          </Select>
        </FormLabel>
      </FormControl>
      <Flex flexDirection="column" w="100%">
        <Heading>Información histórica</Heading>
        <Line data={data} options={options} />
      </Flex>
    </>
  );
}
