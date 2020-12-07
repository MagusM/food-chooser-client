import { IFoodOption, ICheckboxFoodOption } from "../entities/entities";

export function convertFoodOptions(
    foodOptions: IFoodOption[]
  ): ICheckboxFoodOption[] {
    return foodOptions.map((option: IFoodOption) => {
      return {
        food_id: option.food_id,
        food_name: option.food_name,
        food_category: option.food_category,
        isSelected: false,
      };
    });
};
  
export const firstLastNameValidation = (name: string) => {
    return /^[A-Za-zא-ת]+$/.test(name);
};

export const phoneNumberValidation = (phoneNumber: string) => {
    return /^[0-9]+$/.test(phoneNumber);
};

export const idValidation = (id: string) => {
    return /^[0-9]+$/.test(id);
};

export const dateValidation = (date: string) => {
    return date !== "";
};