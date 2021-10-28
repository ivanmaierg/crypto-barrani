import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { historyCurrencyData } from '@/types/Blue';

const baseUrl = `http://localhost:3000/api/`;

const createRequest = (url: string) => ({
  url,
});

export const blueApi = createApi({
  reducerPath: `blueApi`,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBlue: builder.query({
      query: () => createRequest(`/blue`),
    }),
    getRisk: builder.query({
      query: () => createRequest(`/blue/risk`),
    }),
    getDays: builder.query({
      query: () => createRequest(`/blue/days`),
    }),
    getDaysByDid: builder.query({
      query: (did) => createRequest(`/blue/days/${did}`),
    }),
    getOficialHistory: builder.query<historyCurrencyData[], void>({
      query: () => createRequest(`/blue/days/oficial`),
    }),
    getBlueHistory: builder.query<historyCurrencyData[], void>({
      query: () => createRequest(`/blue/days/blue`),
    }),
  }),
});

export const {
  useGetBlueQuery,
  useGetRiskQuery,
  useGetDaysQuery,
  useGetBlueHistoryQuery,
  useGetOficialHistoryQuery,
  useGetDaysByDidQuery,
} = blueApi;
