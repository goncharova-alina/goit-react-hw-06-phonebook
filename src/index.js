import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./base.css";
import App from "./components/App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
