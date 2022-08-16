
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

const authApi = createApi({
  reducerPath: "auth",
 
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5001",
  }),
  endpoints: (builder) => ({
    getToken: builder.query({
      query: () => '/',
      transformResponse: (response) => response.data,
      providesTags: ["TOKEN"]
    }),
  }),
});

export const {getToken} = authApi.endpoints;  
export default authApi;
