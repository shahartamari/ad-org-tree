import { createApi } from "@reduxjs/toolkit/query/react";
import baseQueryWithReauth from "./fetchWithReauth";

const GRAPH_TYPE = "GRAPH";
const PHOTO_TYPE = "PHOTO";
const url = window.URL || window.webkitURL;

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
      headers: { consistencyLevel: "eventual" },
      providesTags: (result, error, id) => [{ type: GRAPH_TYPE, id }],
    }),
    getProfilePhoto: builder.query({
      /*      query: (id) => `users/${id}/photos/48x48/$value`,
      headers: { responseType: "blob" },
      providesTags: (result, error, id) => [{ type: PHOTO_TYPE, id }],
      transformResponse: (response) => {
        const url = window.URL || window.webkitURL;
        const img = url.createObjectURL(response);
        console.log(img);
        return img;
            },
  */ headers: { responseType: "blob" },
      queryFn: async (arg, api, extraOptions, baseQueryWithReauth) => {
          const result = await baseQueryWithReauth(
            `users/${arg}/photos/48x48/$value`,
            api,
            extraOptions
          );
         
          const img = url.createObjectURL(result);
          return img;
          
      },
    }),
  }),
});

export default graphApi;
export const { useGetUserQuery, useGetUsersQuery, useGetProfilePhotoQuery } =
  graphApi;
