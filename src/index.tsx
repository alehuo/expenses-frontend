import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./styles/reset.scss";
import "./styles/index.scss";
import * as serviceWorker from './serviceWorker';

import thunk from "redux-thunk";
import authenticationReducer from "./reducers/AuthenticationReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({ authenticationReducer });

const middleware = [thunk];

// Create store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app") as HTMLElement
);

serviceWorker.unregister();