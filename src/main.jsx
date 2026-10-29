import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.jsx";
import LangProvider from "./context/LangProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LangProvider>
      <App />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            fontFamily: "inherit",
            borderRadius: "12px",
          },
        }}
      />
    </LangProvider>
  </BrowserRouter>
);