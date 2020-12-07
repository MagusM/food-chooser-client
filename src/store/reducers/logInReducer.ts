import { IAction } from "../../entities/entities";
import { IActionSetLogInState, SET_LOG_IN_STATE } from "../actions/logInAction";

export function logInReducer(isLoggedIn: boolean, action:IAction): boolean {
    switch (action.type) {
        case SET_LOG_IN_STATE: {
            const setLogInStateAction = action as IActionSetLogInState
            isLoggedIn = setLogInStateAction.isLoggedIn;
            return isLoggedIn;
        }
        default: {
            return isLoggedIn
        }
    }
}