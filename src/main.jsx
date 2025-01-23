import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomerContextProvider from "./context/CustomerContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomerContextProvider>
      <App />
    </CustomerContextProvider>
  </StrictMode>
);
