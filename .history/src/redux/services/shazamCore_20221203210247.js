import { createAPI, fetchBaseQuery } from '@reduxjs/toolkit';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aa86041609msh651730729ed9b3dp1da6e2jsn7ec97b06be13',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createAPI({
  reducerPath: 'shazamCoreApi',
});
