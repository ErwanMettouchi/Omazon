import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
