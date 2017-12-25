import "normalize.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles";
import store from "./store";
import Routes from "./routes";
import registerServiceWorker from "./utils/registerServiceWorker";

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    document.getElementById("root")
  );

render();
store.subscribe(render);
registerServiceWorker();
