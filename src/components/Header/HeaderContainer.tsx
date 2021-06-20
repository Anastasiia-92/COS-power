import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";


type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

export type MapStatePropsType = {
    isAuth: boolean,
    login: null | string,
}
export type MapDispatchPropsType = {
    getAuthUserData: () => void
}

let mapStateToProps = (state: ReduxStoreType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)