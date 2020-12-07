import { connect } from "react-redux";
import { IFormData } from "../../../entities/entities";
import { fetchBeerList, inserChosenBeer } from "../../../store/actions/beerListAction";
import { addUser } from "../../../store/actions/userFormAction";
import { IState } from "../../../store/reducers/reducer";
import UserFormSection, { IPropsIn, IPropsOut } from "../presentation/userFormSection";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        beerList: state.beerList
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {
        onFormValidSubmit: (formData: IFormData) => {
            dispatch(addUser(formData))
        },
        initBeerList: () => {
            dispatch(fetchBeerList())
        },
        submitBeerChoise: (chosenBeer: string) => {
            dispatch(inserChosenBeer(chosenBeer));
        }
    }
}

export const UserFormSectionLink = connect(mapStateToProps, mapDispatchToProps)(UserFormSection);