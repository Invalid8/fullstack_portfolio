import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./vendor/boxicons/css/boxicons.min.css";
import "./vendor/bootstrap/css/bootstrap.min.css";

import "./css/animate.css";
import "./css/font.css";
import "./css/Kimera_X/index.css";
import "./css/style.css";
import ThemeContextProvider from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
