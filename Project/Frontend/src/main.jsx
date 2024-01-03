// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store"; // Import your Redux store configuration file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
