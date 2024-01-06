import React from "react";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { RouterProvider } from "react-router-dom";

import Auth0ProviderWithHistory from "@/auth/client";

import { client } from "@/cms/index.js";

import "@/index.css";

import router from "@/routes/routes.jsx";

import { store } from "@/store/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Auth0ProviderWithHistory>
          <RouterProvider router={router} />
        </Auth0ProviderWithHistory>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
