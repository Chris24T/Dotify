import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseHeaders = {
  'X-RapidAPI-Key': 'aa86041609msh651730729ed9b3dp1da6e2jsn7ec97b06be13',
  'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
};

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set({ baseHeaders });
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: (genre) => '/charts/world' }),
  }),
});
// redux toolkit auto generates a hook
export const { useGetTopChartsQuery } = shazamCoreApi;
