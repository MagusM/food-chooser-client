import { connect } from "react-redux";
import { IState } from "../../../store/reducers/reducer";
import MainSection, { IPropsIn, IPropsOut } from "../presentation/mainSection";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {

    }
}

export const MainSectionLink = connect(mapStateToProps, mapDispatchToProps)(MainSection);