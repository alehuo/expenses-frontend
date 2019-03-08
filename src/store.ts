import thunk from "redux-thunk";
import authenticationReducer from "./reducers/AuthenticationReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { StateType } from "typesafe-actions";

const reducer = combineReducers({ auth: authenticationReducer });

const middleware = [thunk];

export type RootState = StateType<typeof reducer>;

// Create store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
