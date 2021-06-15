import {ActionsTypes, AuthStoreType} from "./redux-store";

export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {id, email, login},
    } as const
}


let initialState: AuthStoreType = {
    // isFetching: false,
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default:
            return state;
    }
}