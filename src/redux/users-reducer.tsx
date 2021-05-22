
import {ActionsTypes, UsersStoreType, UserStoreType} from "./redux-store";

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserStoreType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}

let initialState: UsersStoreType = {
    users: [
        // {
        //     id: 1,
        //     protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
        //     followed: false,
        //     fullName: 'Rubeus Hagrid',
        //     status: 'Like to cooking',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
        //     followed: true,
        //     fullName: 'Bertha Jorkins',
        //     status: 'Just relax...',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
        //     followed: true,
        //     fullName: 'Bellatrix Lestrange',
        //     status: "I'll teach you to mining",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 4,
        //     protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
        //     followed: false,
        //     fullName: 'Luna Lovegood',
        //     status: "Wish you good day!",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },

    ]
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}