import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.scss";
import "./styles/index.scss";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import "./FontAwesome";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app") as HTMLElement
);

serviceWorker.unregister();
