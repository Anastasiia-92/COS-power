import {addPostAC, ChangeNewTextAC, profileReducer} from "./profile-reducer";
import {addNewMessageTextAC, dialogsReducer, sendMessageAC} from "./dialogs-reducer";

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

export type StoreType = {
    _state: RootStateType
    // changeNewTextPost: (newText: string) => void
    // addPost: (newText: string) => void
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof ChangeNewTextAC> | ReturnType<typeof addNewMessageTextAC> | ReturnType<typeof sendMessageAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, post: 'Hi! How are you?', likesCount: 3},
                {id: 2, post: 'What about a movie tonight?', likesCount: 7},
                {id: 3, post: "It's cold today((", likesCount: 2}
            ],
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Bertha Jorkins'},
                {id: 2, name: 'Rubeus Hagrid'},
                {id: 3, name: 'Bellatrix Lestrange'},
                {id: 4, name: 'Luna Lovegood'}
            ],
            messages: [
                {id: 1, message: "Hello! How do you feel about going to the movies today?"},
                {id: 2, message: "Oh, great idea! I have not visited cinema for ages."}
            ],
            newMessageText: ""
        }
    },
    _onChange() {
        console.log('state changed')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._onChange()

    }
}
