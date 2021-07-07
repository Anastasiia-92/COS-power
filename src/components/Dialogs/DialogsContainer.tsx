import React, {ComponentType} from "react";
import {sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux'
import {DialogsDataType, RootStateType} from "../../redux/redux-store";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";




export type MapStateDialogsPropsType = {
    dialogsPage: DialogsDataType
}
export type MapDispatchDialogsPropsType = {
    sendMessageClick: (newMessageBody: string) => void
}


let mapStateToProps = (state: RootStateType): MapStateDialogsPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch) : MapDispatchDialogsPropsType => {
    return {
        sendMessageClick: (newMessageBody) => {
            dispatch(sendMessageAC(newMessageBody))
        }
}}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs)

