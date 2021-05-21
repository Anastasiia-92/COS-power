import {ActionsTypes, PostsDataType, ProfilePageType} from "./store";

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

let initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, post: 'Hi! How are you?', likesCount: 3},
        {id: 2, post: 'What about a movie tonight?', likesCount: 7},
        {id: 3, post: "It's cold today((", likesCount: 2}
    ]
}

export const profileReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostsDataType = {
                id: 5,
                post: action.messagePost,
                likesCount: 0
            }
            let newState = {...state}
            newState.posts = [...state.posts]
            newState.posts.push(newPost);
            newState.messageForNewPost = '';
            return newState;
        }
        case "CHANGE-NEW-TEXT": {
            let newState = {...state}
            newState.messageForNewPost = action.newText;
            return newState;
        }
        default:
            return state;
    }
}