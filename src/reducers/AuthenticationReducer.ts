import { ActionType } from "typesafe-actions";
import * as authenticationActions from "./actions/AuthenticationActions";
import { Reducer } from "redux";
import { SET_TOKEN } from "./Constants";

interface AuthenticationState {
  readonly isAuthenticated: boolean;
  readonly token: string;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
  token: ""
};

export type AuthenticationAction = ActionType<typeof authenticationActions>;

const reducer: Reducer<AuthenticationState, AuthenticationAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...{}, ...state, ...{ token: action.payload.token } };
    default:
      return state;
  }
};

export default reducer;
