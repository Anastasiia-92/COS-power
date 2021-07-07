import React from "react";
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogDataType, DialogsDataType, MessagesDataType} from "../../redux/redux-store";
import {AddMessageFormRedux} from "./AddMessageForm";

type DialogsPropsType ={
    dialogsPage: DialogsDataType
    sendMessageClick: (newMessageBody: string) => void
}

export type FormDataType = {
    newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {
    const addNewMessage= (formData: FormDataType) => {
        props.sendMessageClick(formData.newMessageBody)
    }

    let dialogElements = props.dialogsPage.dialogs.map((d: DialogDataType) => {
        return <Dialog name={d.name} id={d.id}/>
    })
    let messageElements = props.dialogsPage.messages.map((m: MessagesDataType) => {
        return <Message message={m.message} id={m.id}/>
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux
                    onSubmit={addNewMessage}
                />
            </div>

        </div>
    )

}



export default Dialogs