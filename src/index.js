import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, ChartProvider } from "./server";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ChartProvider>
          <App />
        </ChartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
