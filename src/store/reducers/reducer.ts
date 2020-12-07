import { IAction, IFoodOption, IUserData } from "../../entities/entities";
import { beerListReducer } from "./beerListReducer";
import { foodTypesReducer } from "./foodTypesReducer";
import { logInReducer } from "./logInReducer";
import { userDataReducer } from "./userDataReducer";

export interface IState {
    isLoggedIn: boolean
    userData: IUserData
    foodOptions: IFoodOption[],
    beerList: string[]
}

export const initialState:IState = {
    isLoggedIn: false,
    userData:
    {
        email: "",
        familyName: "",
        givenName: "",
        googleId: "",
        imageUrl: "",
        name: ""
    },
    foodOptions: [{ food_id: 1, food_name: "פסטרמה", food_category: 'אוכל' }],
    beerList: []
}

export function reducer(state: IState | undefined, action: IAction): IState {
    if (state === undefined) {
        state = initialState;
    }
    return {
        isLoggedIn: logInReducer(state.isLoggedIn, action),
        userData: userDataReducer(state.userData, action),
        foodOptions: foodTypesReducer(state.foodOptions, action),
        beerList: beerListReducer(state.beerList, action)
    }
}