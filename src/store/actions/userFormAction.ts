import { ThunkAction } from "redux-thunk";
import { IAction, IFormData } from "../../entities/entities";
import { IState } from "../reducers/reducer";

export function addUser(formData: IFormData): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
    fetch('http://localhost:2000/users', {
        method: 'post',
        body: JSON.stringify({
            "user": {
                "EMAIL": getState().userData.email,
                "FIRST_NAME": formData.FIRST_NAME,
                "LAST_NAME": formData.LAST_NAME,
                "BIRTH_DATE": formData.BIRTH_DATE,
                "ID_NUMBER": formData.ID_NUMBER,
                "PHONE_NAMBER": formData.PHONE_NAMBER
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
  };
}

export function setUserLoginStatus(): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
    fetch('http://localhost:2000/userLoginStatus', {
        method: 'post',
        body: JSON.stringify({
            "user": {
                "EMAIL": getState().userData.email
            }
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
  };
}
