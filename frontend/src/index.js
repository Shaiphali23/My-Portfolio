import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Your custom CSS
import "@coreui/coreui/dist/css/coreui.min.css"; // CoreUI CSS
import "@coreui/coreui/dist/css/coreui-utilities.min.css";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
