import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./fetchWithReauth";

const GRAPH_TYPE = "GRAPH";

const graphApi = createApi({
  reducerPath: "MgGraph",
  baseQuery: baseQueryWithReauth,
  tagTypes: [GRAPH_TYPE],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      transformResponse: (response) => response.value,
    }),
    getUser: builder.query({
      query: (id) =>
        `users/${id}$select=displayName,jobTitle,department,userPrinicpalName,mail$expand=manager($levels=max;$select==displayName,jobTitle,department,userPrinicpalName,mail)`,
      transformResponse: (response) => response.value,
      providesTags: (result, error, id) => [{ type: GRAPH_TYPE, id }],
    }),
    getProfilePhoto: builder.query({
      query: (id) => `users/${id}/photos/48x48/$value`,
      transformResponse: async (response) => await response.blob(),
    }),
  }),
});

export default graphApi;
export const { useGetUserQuery, useGetUsersQuery, useGetProfilePhotoQuery } =
  graphApi;
