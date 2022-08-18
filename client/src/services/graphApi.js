import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./fetchWithReauth";

const GRAPH_TYPE = "GRAPH";
const selectProps = "$select=id,displayName,jobTitle,department,mail";

const graphApi = createApi({
  reducerPath: "MgGraph",
  baseQuery: baseQueryWithReauth,
  tagTypes: [GRAPH_TYPE],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users?${selectProps}`,
      transformResponse: (response) => response.value,
      providesTags: (result, error, arg) => 
        result
          ? [...result.map((id) => ({ type: GRAPH_TYPE, id })), GRAPH_TYPE]
          : [GRAPH_TYPE]
      
    }),
    getUser: builder.query({
      query: (id) =>
        `users/${id}?${selectProps}`,
      providesTags: (result, error, id) => [{ type: GRAPH_TYPE, id }],
    }),
    searchUser: builder.query({
      query: (term) =>
        `users/?$filter=startswith(displayName,'${term}')${selectProps}$expand=manager($levels=max;${selectProps})`,
      transformResponse: (response) => response.value,
      providerTags: (result, error, id) => [{ type: GRAPH_TYPE, id }],
    }),

    getPhoto: builder.mutation({
      query: (id) => ({
        url: `users/${id}/photos/48x48/$value`,
        responseHandler: (response) =>
          response.blob().then((blob) => URL.createObjectURL(blob)),
      }),
    }),
  }),
});

export default graphApi;
export const { useGetUserQuery, useGetUsersQuery, useGetPhotoMutation } =
  graphApi;
