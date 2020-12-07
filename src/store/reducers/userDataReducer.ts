import { IAction, IUserData } from "../../entities/entities";
import { IActionSetUserData, SET_USER_DATA } from "../actions/userDataAction";

export function userDataReducer(userData: IUserData, action:IAction): IUserData {
    switch (action.type) {
        case SET_USER_DATA: {
            const setUserDataAction = action as IActionSetUserData
            userData = setUserDataAction.userData;
            return userData;
        }
        default: {
            return userData
        }
    }
}