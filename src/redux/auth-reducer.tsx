import {ActionsTypes, AuthStoreType} from "./redux-store";
import {Dispatch} from "react";
import {authAPI} from "../api/api";


export const setUserData = (id: number, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {id, email, login},
    } as const
}


let initialState: AuthStoreType = {
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

export const getAuthUserData = () => {
    return (dispatch: Dispatch<ActionsTypes>) => {

        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                   dispatch(setUserData(id, email, login));
                }
            })
    }
}