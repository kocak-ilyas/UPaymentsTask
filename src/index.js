import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import configureStore from "./reducers/configureStore";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
