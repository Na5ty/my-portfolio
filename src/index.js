// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Change the import statement for createRoot
import { createRoot } from "react-dom/client";

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

reportWebVitals();
