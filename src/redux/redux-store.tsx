import { combineReducers, createStore } from 'redux'
import {addNewMessageTextAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    userReducer
} from "./users-reducer";
import {addPostAC, ChangeNewTextAC, profileReducer, setUserProfile} from "./profile-reducer";


export type UserStoreType = {
    name: string
    id: number
    photos: {
        small: string | null
        large: string | null
    }
    status: string
    followed: boolean
}

export type UsersStoreType = {
    users: Array<UserStoreType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type DialogDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsDataType = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
    newMessageText: string
}


export type PostsDataType = {
    id: number
    post: string
    likesCount: number
}

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        github: string,
        instagram: string,
        mainLink: null,
        twitter: string,
        vk: string,
        website: null,
        youtube: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: string,
    photos: {
        small: string,
        large: string
    }
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: PostsDataType[]
    userProfile: UserProfileType | null
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsDataType
}


export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof ChangeNewTextAC> |
    ReturnType<typeof addNewMessageTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers>|
    ReturnType<typeof setCurrentPage>|
    ReturnType<typeof setTotalUsersCount>|
    ReturnType<typeof toggleIsFetching>|
    ReturnType<typeof setUserProfile>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer
})



export let store = createStore(reducers);

export type ReduxStoreType = ReturnType<typeof reducers>;
