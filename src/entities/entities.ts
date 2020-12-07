export interface IAction {
    type:string
}

export interface IUserData {
    email: string
    familyName: string
    givenName: string
    googleId: string
    imageUrl: string
    name: string
}

export interface IFoodOption {
    food_id: number,
    food_name: string,
    food_category: string
}


export interface ICheckboxFoodOption {
    food_id: number,
    food_name: string,
    food_category: string,
    isSelected: boolean
}

export interface IFormData {
    FIRST_NAME: string,
    LAST_NAME: string,
    BIRTH_DATE: string,
    ID_NUMBER: string,
    PHONE_NAMBER: string
}