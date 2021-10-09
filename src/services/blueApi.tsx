import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  }),
});

export const { useGetBlueQuery, useGetRiskQuery } = blueApi;
