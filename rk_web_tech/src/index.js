import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap/js/dist/scrollspy.js";
import "../node_modules/bootstrap/js/dist/tooltip.js";
// import reportWebVitals from './reportWebVitals';
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <ReactNotifications />
      <App />
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
