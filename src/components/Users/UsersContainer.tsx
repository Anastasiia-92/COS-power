import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {UserStoreType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import UsersC from "./UsersC";


export type MapStateUsersPropsType = {
    users: any
}
export type MapDispatchUsersPropsType = {
    onFollowClick: (userId: number) => void
    onUnFollowClick: (userId: number) => void
    setUsers: (users: Array<UserStoreType>) => void
}


let mapStateUsersToProps = (state: ReduxStoreType): MapStateUsersPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchUsersToProps = (dispatch: Dispatch) : MapDispatchUsersPropsType => {
    return {
        onFollowClick: (userId: number) => {
            dispatch(followAC(userId))
        },
        onUnFollowClick:(userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users: Array<UserStoreType>) => {
            dispatch(setUsersAC(users))
        },

    }
}

export default connect (mapStateUsersToProps, mapDispatchUsersToProps)(UsersC)