import React, {ChangeEvent, } from "react";
import {addNewMessageTextAC,sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { Dispatch } from 'redux'
import {DialogsDataType, RootStateType} from "../../redux/redux-store";



export type MapStateDialogsPropsType = {
    dialogsPage: DialogsDataType
    isAuth: boolean

}
export type MapDispatchDialogsPropsType = {
    sendMessageClick: () => void
    addNewMessageText: (body: ChangeEvent<HTMLTextAreaElement>) => void
}


let mapStateToProps = (state: RootStateType): MapStateDialogsPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

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




