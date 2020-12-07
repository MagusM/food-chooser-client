import { connect } from "react-redux";
import { ICheckboxFoodOption } from "../../../entities/entities";
import { addFoodOption, addUserFood, fetchFoodOptions } from "../../../store/actions/foodTypesAction";
import { IState } from "../../../store/reducers/reducer";
import FavoriteFoodSection, { IPropsIn, IPropsOut } from "../presentation/favoriteFoodSection";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        foodOptions: state.foodOptions
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {
        initFoodOptions: () => {
            dispatch(fetchFoodOptions())
        },
        addFoodOption: (foodName: string) => {
            dispatch(addFoodOption(foodName))
        },
        onSubmit: (selectedFoods: ICheckboxFoodOption[]) => {
            dispatch(addUserFood(selectedFoods))
        }
    }
}

export const FavoriteFoodSectionLink = connect(mapStateToProps, mapDispatchToProps)(FavoriteFoodSection);