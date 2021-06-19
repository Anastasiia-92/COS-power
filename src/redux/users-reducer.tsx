import {ActionsTypes, UsersStoreType, UserStoreType} from "./redux-store";
import {Dispatch} from "react";
import {userAPI} from "../api/api";

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsers = (users: Array<UserStoreType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count: totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching: isFetching
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId,
    } as const
}

let initialState: UsersStoreType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}

export const userReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "FOLLOW": {
            let stateCopy = {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? {...u, followed: true} : u
                )
            }
            return stateCopy;
        }
        case "UNFOLLOW": {
            let stateCopy = {
                ...state,
                users: state.users.map((u) =>
                    u.id === action.userId ? {...u, followed: false} : u
                )
            }
            return stateCopy;
        }
        case "SET-USERS": {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.count}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE-IS-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {

        dispatch(toggleIsFetching(true));

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const unFollowUser = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {

       dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollow(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
        }
    }

export const followUser = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {

        dispatch(toggleIsFollowingProgress(true, userId))
        userAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(follow(userId));
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}