import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import graphApi from "./services/graphApi";
import authApi from "./services/authApi";
//import authSlice from "./services/authSlice";

import App from "./components/app";

const root = createRoot(document.querySelector("#root"));

const store = configureStore({
  reducer: {
    [graphApi.reducerPath]: graphApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    graphApi.middleware,
    authApi.middleware,
  ],
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
