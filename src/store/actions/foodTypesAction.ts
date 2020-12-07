import { ThunkAction } from "redux-thunk";
import { IAction, ICheckboxFoodOption, IFoodOption } from "../../entities/entities";
import { IState } from "../reducers/reducer";

export const SET_FOOD_OPTIONS = "SET_FOOD_OPTIONS";

export interface IActionSetFoodOptions extends IAction {
  foodOptions: IFoodOption[]
}

export function setFoodOptions(foodOptions: IFoodOption[]): IActionSetFoodOptions {
  return {
    type: SET_FOOD_OPTIONS,
    foodOptions: foodOptions,
  };
}

export function fetchFoodOptions(): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
      fetch(`http://localhost:2000/foods`)
      .then ((res) => res.json())
        .then((data: IFoodOption[]) => {     
          dispatch(setFoodOptions(data))
      });
  };
}

export function addFoodOption(foodName: string): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
    fetch('http://localhost:2000/foods', {
        method: 'post',
        body: JSON.stringify({
            "foodName": foodName
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => {
        dispatch(fetchFoodOptions());
    })
  };
}

export function addUserFood(chosedFood: ICheckboxFoodOption[]): ThunkAction<void, IState, undefined, IAction> {
  return (dispatch, getState) => {
    fetch('http://localhost:2000/userFood', {
        method: 'post',
        body: JSON.stringify({
            "foods": chosedFood,
            "email": getState().userData.email
        }),
        headers: {
            'Content-Type': 'application/json'
        },
    })
  };
}