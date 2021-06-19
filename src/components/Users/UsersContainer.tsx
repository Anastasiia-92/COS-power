import React from "react";
import {connect} from "react-redux";
import {UserStoreType} from "../../redux/redux-store";
import {
    follow, followUser, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow, unFollowUser
} from "../../redux/users-reducer";
import {ReduxStoreType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



type UsersPropsType = MapStateUsersPropsType & MapDispatchUsersPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount(): void {

        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    isFetching={this.props.isFetching}
                    getUsers={this.props.getUsers}
                    pageChanged={this.onPageChanged}
                    unFollowUser={this.props.unFollowUser}
                    followUser={this.props.followUser}
                />
            </div>)
    }
}

export type MapStateUsersPropsType = {
    users: Array<UserStoreType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchUsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unFollowUser: (userId: number) => void
    followUser: (userId: number) => void
}


let mapStateUsersToProps = (state: ReduxStoreType): MapStateUsersPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateUsersToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers,
    unFollowUser,
    followUser
})(UsersContainer)
