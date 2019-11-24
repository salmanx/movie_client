import React from "react";
import ReactDOM from "react-dom";
import { MoviesProvider } from "./context";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

import App from "./App";

const jsx = (
  <MoviesProvider>
    <App />
  </MoviesProvider>
);
// const jsx = <App />;
ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
