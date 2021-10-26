import { getFilterDateCondition } from '@/utils/dates/getFilterDateCondition';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';
import { numberOfDaysReducer } from '@/utils/reducers/numberOfDaysReducer';
import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  Heading,
} from '@chakra-ui/react';
import React, { ReactElement, useReducer, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart({
  blueHistory,
  oficialHistory,
}): ReactElement {
  const [historyDays, dispatch] = useReducer(numberOfDaysReducer, {
    state: `monthly`,
  });
  const { filterCb } = getFilterDateCondition(historyDays.state);
  const blueData = blueHistory.filter((day) => filterCb(day));
  const oficialData = oficialHistory.filter((day) => filterCb(day));
  const data = {
    labels: blueData.map((day: any) => day.date),
    datasets: [
      {
        label: `Price In USD Blue`,
        data: blueData.map((day: any) => day.value_buy),
        backgroundColor: `#5bffa8`,
        borderColor: `gray`,
      },
      {
        label: `Price In USD Oficial`,
        data: oficialData.map((day: any) => day.value_buy),
        backgroundColor: `#ff314a`,
        borderColor: `gray`,
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
      type: e.target.value,
      payload: e.target.value,
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
            <option value="quartearly">4 años</option>
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
