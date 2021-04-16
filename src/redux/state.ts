export let state: RootStateType = {
    profilePage:{
    posts: [
        {id: 1, post: 'Hi! How are you?'},
        {id: 2, post: 'What about a movie tonight?'},
        {id: 3, post: "It's cold today(("}
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
}

export type ProfilePageType = {
    posts: PostsDataType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsDataType
}