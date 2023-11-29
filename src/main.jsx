import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { ClientContext } from "graphql-hooks";
import { client } from "@/cms/index.js";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <RouterProvider router={router} />
    </ClientContext.Provider>
  </React.StrictMode>
);
