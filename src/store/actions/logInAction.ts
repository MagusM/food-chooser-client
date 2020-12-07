import { IAction } from "../../entities/entities";

export const SET_LOG_IN_STATE = "SET_LOG_IN_STATE";

export interface IActionSetLogInState extends IAction {
  isLoggedIn: boolean
}

export function setLogInState(isLoggedIn: boolean): IActionSetLogInState {
  return {
    type: SET_LOG_IN_STATE,
    isLoggedIn: isLoggedIn,
  };
}