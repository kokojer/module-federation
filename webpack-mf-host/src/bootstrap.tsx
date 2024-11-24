import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";

const root = document.getElementById("root");
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootContainer = createRoot(root);
rootContainer.render(rootElement);
