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

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof ChangeNewTextAC>

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
            ]
        }
    },
    _onChange(){
        console.log('state changed')
    },

    subscribe(callback){
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    // changeNewTextPost(newText: string){
    //     this._state.profilePage.messageForNewPost = newText;
    //     this._onChange()
    // },
    // addPost(messagePost: string){
    //     const newPost: PostsDataType = {
    //         id: 5,
    //         post: messagePost,
    //         likesCount: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._onChange()
    // },
    dispatch(action) {
        if(action.type === "ADD-POST"){
            const newPost: PostsDataType = {
                id: 5,
                post: action.messagePost,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._onChange()
        } else if (action.type === "CHANGE-NEW-TEXT"){
            this._state.profilePage.messageForNewPost = action.newText;
            this._onChange()
        }
    }

}








