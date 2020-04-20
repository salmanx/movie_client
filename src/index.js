import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import store from "./stores";

import "./index.css";

import App from "./App";

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
