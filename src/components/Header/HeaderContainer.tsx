import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                }
            })
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
    setUserData: (id: number, email: string, login: string) => void
}

let mapStateToProps = (state: ReduxStoreType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)