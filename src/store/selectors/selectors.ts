import { ICheckboxFoodOption, IFoodOption } from "../../entities/entities";
import { IState } from "../reducers/reducer"

export const getFoodOptionCheckbox = (state: IState): ICheckboxFoodOption[] => {
  return {
    ...state.foodOptions.map((option: IFoodOption) => {
      return {
        food_id: option.food_id,
        food_name: option.food_name,
        food_category: option.food_category,
        isSelected: false,
      };
    })
  }
}