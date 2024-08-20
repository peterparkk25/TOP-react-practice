import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Person from "./Components/Greeting";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Person />
  </StrictMode>
);
