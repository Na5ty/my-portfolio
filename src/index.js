// src/index.js
import React from "react";
import AppRouter from "./AppRouter";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
