import React, {ChangeEvent, } from "react";
import {addNewMessageTextAC, dialogsReducer, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {CustomStoreType, DialogsDataType, RootStateType} from "../../redux/store";
import { Dispatch } from 'redux'
import {ReduxStoreType} from "../../redux/redux-store";


export type MapStateDialogsPropsType = {
    dialogsPage: DialogsDataType
}
export type MapDispatchDialogsPropsType = {
    sendMessageClick: () => void
    addNewMessageText: (body: ChangeEvent<HTMLTextAreaElement>) => void
}


let mapStateToProps = (state: RootStateType): MapStateDialogsPropsType => {
    debugger
    return {
        dialogsPage: state.dialogsPage
    }
}
// let mapStateToProps = (state: CustomStoreType): MapStateDialogsPropsType => {
//     debugger
//     return {
//         dialogsPage: state.getState().dialogsPage
//     }
// }

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchDialogsPropsType => {
    return {
        sendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        addNewMessageText:(body: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(addNewMessageTextAC(body.currentTarget.value))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer




