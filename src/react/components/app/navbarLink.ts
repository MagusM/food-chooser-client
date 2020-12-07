import { connect } from "react-redux";
import { IState } from "../../../store/reducers/reducer";
import Navbar, { IPropsIn, IPropsOut } from "../presentation/navbar";

interface ownProps {
}

const mapStateToProps = (state: IState, ownProps:ownProps): IPropsIn => {
    return {
        isLoggedIn: state.isLoggedIn,
        userName: state.userData.givenName
    }
}

const mapDispatchToProps = (dispatch: any): IPropsOut => {
    return {

    }
}

export const NavbarLink = connect(mapStateToProps, mapDispatchToProps)(Navbar);