import {ActionsTypes, DialogsDataType, RootStateType} from "./store";

export const addNewMessageTextAC = (body: string) => {
    return {
        type: "NEW-MESSAGE-TEXT",
        body: body
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}

let initialState:DialogsDataType = {
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

export const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "NEW-MESSAGE-TEXT":
            state.newMessageText = action.body;
            return state;
        case "SEND-MESSAGE":
            let body = state.newMessageText;
            state.newMessageText = "";
            state.messages.push({id: 6, message: body},);
            return state;
        default:
            return state;
    }
}