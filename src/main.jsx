import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { client } from "@/cms/index.js";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/routes.jsx";
import { store } from "@/store/";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
