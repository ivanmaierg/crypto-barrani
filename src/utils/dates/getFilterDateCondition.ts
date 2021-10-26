import { stringToDate } from './stringToDate';

export const getFilterDateCondition = (state) => {
  const today = new Date();
  const previousMonth = today.getMonth() - 1;
  const thisYear = today.getFullYear();
  switch (state) {
    case `monthly`:
      return {
        filterCb: (day) => {
          const { date } = day;
          const [yyyy, mm, dd] = date.split(`-`).map((item) => Number(item));
          return mm > previousMonth && yyyy === thisYear;
        },
      };
    case `yearly`:
      return {
        filterCb: (day) => {
          const { date } = day;
          const [yyyy] = date.split(`-`).map((item) => Number(item));
          return yyyy === thisYear;
        },
      };
    case `quartearly`:
      return {
        filterCb: (day) => {
          const { date } = day;
          const [yyyy, mm, dd] = date.split(`-`).map((item) => Number(item));
          return dd === 1 && yyyy > thisYear - 4;
        },
      };
    case `all`:
      return {
        filterCb: (day) => {
          const { date } = day;
          const [yyyy, mm, dd] = date.split(`-`).map((item) => Number(item));
          return dd === 1;
        },
      };
    default:
      return {
        filterCb: (day) => {
          const { date } = day;
          const [yyyy, mm, dd] = date.split(`-`).map((item) => Number(item));
          return dd === 1 && mm > previousMonth && yyyy === thisYear;
        },
      };
  }
};
