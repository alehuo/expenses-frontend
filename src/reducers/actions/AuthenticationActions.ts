import { action } from "typesafe-actions";
import { SET_TOKEN } from "../Constants";

export const setToken = (token: string) => action(SET_TOKEN, { token });
