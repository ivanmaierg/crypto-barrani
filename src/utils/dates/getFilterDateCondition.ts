import { historyCurrencyData } from '@/types/Blue';
import { ActionNumberOfDaysState } from '../reducers/numberOfDaysReducer';

export const getFilterDateCondition = (
  historyDays: ActionNumberOfDaysState,
) => {
  const { state: period } = historyDays;
  const today = new Date();
  const previousMonth = today.getMonth() - 1;
  const thisYear = today.getFullYear();
  switch (period) {
    case `monthly`:
      return {
        filterCb: (day: historyCurrencyData) => {
          const { date } = day;
          const [yyyy, mm] = date.split(`-`).map((item) => Number(item));
          return mm > previousMonth && yyyy === thisYear;
        },
      };
    case `yearly`:
      return {
        filterCb: (day: historyCurrencyData) => {
          const { date } = day;
          const [yyyy] = date.split(`-`).map((item) => Number(item));
          return yyyy === thisYear;
        },
      };
    case `quartearly`:
      return {
        filterCb: (day: historyCurrencyData) => {
          const { date } = day;
          const [yyyy, , dd] = date.split(`-`).map((item) => Number(item));
          return dd === 1 && yyyy > thisYear - 4;
        },
      };
    case `all`:
      return {
        filterCb: (day: historyCurrencyData) => {
          const { date } = day;
          const [, , dd] = date.split(`-`).map((item) => Number(item));
          return dd === 1;
        },
      };
    default:
      return {
        filterCb: (day: historyCurrencyData) => {
          const { date } = day;
          const [yyyy, mm, dd] = date.split(`-`).map((item) => Number(item));
          return dd === 1 && mm > previousMonth && yyyy === thisYear;
        },
      };
  }
};
