import { getFilterDateCondition } from '@/utils/dates/getFilterDateCondition';
import {
  numberOfDaysReducer,
  ActionTypeDays,
} from '@/utils/reducers/numberOfDaysReducer';
import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  Heading,
} from '@chakra-ui/react';
import React, { useReducer } from 'react';
import { Line } from 'react-chartjs-2';
import { HistoryCurrencyData } from '@/types/Blue';
import { useColorModeValues } from '@/utils/hooks/useColorModeValues';

export interface dataCurrency {
  blueHistory: HistoryCurrencyData[];
  oficialHistory: HistoryCurrencyData[];
}
interface Action {
  type: ActionTypeDays;
  payload: ActionTypeDays;
}
type LineChartProps = dataCurrency;

export const LineChart: React.FC<LineChartProps> = ({
  blueHistory,
  oficialHistory,
}) => {
  const [historyDays, dispatch] = useReducer(numberOfDaysReducer, {
    state: `monthly`,
  });
  const { bgTertiary } = useColorModeValues();
  const { filterCb } = getFilterDateCondition(historyDays);
  const blueData = blueHistory.filter((day) => filterCb(day));
  const oficialData = oficialHistory.filter((day) => filterCb(day));
  const data = {
    labels: blueData.map((day: any) => day.date),
    datasets: [
      {
        label: `Price In USD Blue`,
        data: blueData.map((day: any) => day.value_buy),
        backgroundColor: `#5bffa8`,
        borderColor: `rgb(75, 192, 192)`,
      },
      {
        label: `Price In USD Oficial`,
        data: oficialData.map((day: any) => day.value_buy),
        backgroundColor: `#ff314a`,
        borderColor: `#ff314a`,
      },
    ],
  };
  const handleOnSelect = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const action: Action = {
      type: e.currentTarget.value,
      payload: e.currentTarget.value,
    };
    dispatch(action);
    e.preventDefault();
  };
  return (
    <Flex
      my="20"
      w="100%"
      h="auto"
      direction="column"
      bg={bgTertiary}
      p="5"
      rounded="5"
    >
      <FormControl display="flex" justifyContent="start" mb="2">
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
        <Line data={data} />
      </Flex>
    </Flex>
  );
};
