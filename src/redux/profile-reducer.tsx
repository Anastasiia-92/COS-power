import {ActionsTypes, PostsDataType, ProfilePageType, UserProfileType} from "./redux-store";
import {Dispatch} from "react";
import {profileAPI, userAPI} from "../api/api";


export const addPostAC = (messagePost: string) => {
    return {
        type: "ADD-POST",
        messagePost: messagePost
    } as const
}
export const ChangeNewTextAC = (newText: string) => {
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const
}
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile: profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status: status
    } as const
}

let initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, post: 'Hi! How are you?', likesCount: 3},
        {id: 2, post: 'What about a movie tonight?', likesCount: 7},
        {id: 3, post: "It's cold today((", likesCount: 2}
    ],
    userProfile: null,
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: 5,
                post: action.messagePost,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                messageForNewPost: ''
            };
        }
        case "CHANGE-NEW-TEXT": {
            return {
                ...state,
                messageForNewPost: action.newText
            };
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                userProfile: action.profile
            };
        }
        case "SET-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {

        userAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {

        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}
export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ActionsTypes>) => {

        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}