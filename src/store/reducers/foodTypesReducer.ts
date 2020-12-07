import { IAction, IFoodOption } from "../../entities/entities";
import { IActionSetFoodOptions, SET_FOOD_OPTIONS } from "../actions/foodTypesAction";

export function foodTypesReducer(foodOptions: IFoodOption[], action:IAction): IFoodOption[] {
    switch (action.type) {
        case SET_FOOD_OPTIONS: {
            const setFoodOptionsAction = action as IActionSetFoodOptions
            foodOptions = setFoodOptionsAction.foodOptions;
            return [...foodOptions];
        }
        default: {
            return foodOptions
        }
    }
}