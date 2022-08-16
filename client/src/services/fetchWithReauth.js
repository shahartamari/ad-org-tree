import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { getToken } from "./authApi";

const url = `https://${process.env.REACT_APP_GRAPH_ENDPOINT}/${process.env.REACT_APP_GRAPH_VERSION}/`;

const baseQuery = (token) =>
  fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers) => {
      headers.set("authorization", `bearer ${token}`);
      return headers;
    },
  });

const baseQueryWithReauth = async (args, api, extra) => {
  const result = getToken.select()(api.getState());
  const token = result.data;

  const { data, error } = await baseQuery(token)(args, api, extra);

  if (error && error.status === 401) {
    const { isSuccess, data } = await api.dispatch(getToken.initiate());

    if (isSuccess) {
      const result = await baseQuery(data)(args, api, extra);
      return result;
    }
  } else {
    return data;
  }
};

export default baseQueryWithReauth;
