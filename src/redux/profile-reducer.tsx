import {ActionsTypes, PostsDataType, ProfilePageType, UserProfileType} from "./redux-store";


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

let initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, post: 'Hi! How are you?', likesCount: 3},
        {id: 2, post: 'What about a movie tonight?', likesCount: 7},
        {id: 3, post: "It's cold today((", likesCount: 2}
    ],
    userProfile: null
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
            debugger
            return {
                ...state,
                userProfile: action.profile
            };
        }
        default:
            return state;
    }
}