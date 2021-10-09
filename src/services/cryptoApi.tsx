import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = `coinrankingb11bb09642f841a59602c4f21114728559d2aa5731b7a927`;

const baseUrl = `http://localhost:3000/api/`;

const createRequest = (url: string) => ({
  url,
  headers: {
    'x-access-token': apiKey,
  },
});

export const cryptoApi = createApi({
  reducerPath: `cryptoApi`,
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest(`/exchanges`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
