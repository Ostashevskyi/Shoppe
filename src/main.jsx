import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClientContext } from "graphql-hooks";
import { client } from "./cms/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </React.StrictMode>
);
