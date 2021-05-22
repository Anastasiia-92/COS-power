import { combineReducers, createStore } from 'redux'
import {addNewMessageTextAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC, userReducer} from "./users-reducer";
import {addPostAC, ChangeNewTextAC, profileReducer} from "./profile-reducer";


export type UserLocationType ={
    city: string
    country: string
}

export type UserStoreType = {
    id: number
    protoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}

export type UsersStoreType = {
    users: Array<UserStoreType>
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

export type ProfilePageType = {
    messageForNewPost: string
    posts: PostsDataType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsDataType
}

export type CustomStoreType = {
    _state: RootStateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof ChangeNewTextAC> |
    ReturnType<typeof addNewMessageTextAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof unfollowAC> |
    ReturnType<typeof setUsersAC>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer
})



export let store = createStore(reducers);

export type ReduxStoreType = ReturnType<typeof reducers>;
