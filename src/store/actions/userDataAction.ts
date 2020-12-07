import { IAction, IUserData } from "../../entities/entities";

export const SET_USER_DATA = "SET_USER_DATA";

export interface IActionSetUserData extends IAction {
  userData: IUserData
}

export function setUserData(userData: IUserData): IActionSetUserData {
  return {
    type: SET_USER_DATA,
    userData: userData,
  };
}