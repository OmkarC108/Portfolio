import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.jsx";
import "./index.css";
import { ThemeProvider } from "./src/common/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
