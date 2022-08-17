import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getToken } from "./authApi";

const baseQuery = (token) =>
  fetchBaseQuery({
    baseUrl : `https://${process.env.REACT_APP_GRAPH_ENDPOINT}/${process.env.REACT_APP_GRAPH_VERSION}/`,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `bearer ${token}`);
      return headers;
    },
  });

const baseQueryWithReauth = async (args, api, extra) => {
  const result = getToken.select()(api.getState());
  const token = result.data;

  const response = await baseQuery(token)(args, api, extra);

  const { error } = response;
  // if the token is null or invalid, then we get an "unauthorized" response
  if (error && error.status === 401) {
    // get a new token by calling Auth API getToken
    const { isSuccess, data, error } = await api.dispatch(getToken.initiate());
    if (isSuccess) {
      // call base query and pass token data
      // and pass-through the parameters that were received
      const response = await baseQuery(data)(args, api, extra);
      return response;
    } else {
      // fail to get token
      console.error(error);
    }
  }
  return response;
};

export default baseQueryWithReauth;
