import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
//it gives us the ability to change the URL without reloading the page and also allows us to navigate between different pages of our application
//importing the BrowserRouter component from react-router-dom to enable routing in our application

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
