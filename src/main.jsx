// Dependences
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";

// * Styles * //
// General
import "./global.scss";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
