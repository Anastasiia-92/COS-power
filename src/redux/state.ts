
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

export let state: RootStateType = {
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
}


export let onChange = () => {
    console.log('hello')
}

export const subscribe = (callback: () => void) => {
    onChange = callback
}

export const addPost = (messagePost: string) => {
    const newPost: PostsDataType = {
        id: 5,
        post: messagePost,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    onChange()
}

export const changeNewTextPost = (newText: string) => {
    state.profilePage.messageForNewPost = newText;
    onChange()
}