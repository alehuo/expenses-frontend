import IAction from "./IAction";

const initialState = {
  isAuthenticated: false,
  token: ""
};

const AuthenticationActions = {
  SET_TOKEN: "SET_TOKEN"
};

export const setToken = (token: string): IAction => {
  return {
    payload: {
      token
    },
    type: AuthenticationActions.SET_TOKEN
  };
};

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case AuthenticationActions.SET_TOKEN:
      return Object.assign({}, state, { token: action.payload.token });
    default:
      return state;
  }
};
