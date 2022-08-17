import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const authApi = createApi({
  reducerPath: "auth",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_TOKEN_URI,
  }),
  endpoints: (builder) => ({
    getToken: builder.query({
      query: () => "/",
      transformResponse: (response) => response.data,
      providesTags: ["TOKEN"],
    }),
  }),
});

export const { getToken } = authApi.endpoints;
export default authApi;
