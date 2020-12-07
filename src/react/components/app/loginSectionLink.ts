import { connect } from "react-redux";
import { setLogInState } from "../../../store/actions/logInAction";
import { setUserData } from "../../../store/actions/userDataAction";
import { setUserLoginStatus } from "../../../store/actions/userFormAction";
import { IState } from "../../../store/reducers/reducer";
import LoginSection, { IPropsIn, IPropsOut } from "../presentation/loginSection";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {

    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {
        loginSucceed: (response:any) => {
            dispatch(setLogInState(true))
            dispatch(setUserData(response.profileObj))
            dispatch(setUserLoginStatus());
        }
    }
}

export const LoginSectionLink = connect(mapStateToProps, mapDispatchToProps)(LoginSection);