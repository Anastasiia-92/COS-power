import React, {ChangeEvent, ComponentType,} from "react";
import {addNewMessageTextAC,sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from 'redux'
import {DialogsDataType, RootStateType} from "../../redux/redux-store";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";



export type MapStateDialogsPropsType = {
    dialogsPage: DialogsDataType
}
export type MapDispatchDialogsPropsType = {
    sendMessageClick: () => void
    addNewMessageText: (body: ChangeEvent<HTMLTextAreaElement>) => void
}


let mapStateToProps = (state: RootStateType): MapStateDialogsPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs)

