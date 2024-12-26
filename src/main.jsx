import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css";
import { TextProvider } from "./contexts/TextContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextProvider>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </TextProvider>
  </StrictMode>
);
