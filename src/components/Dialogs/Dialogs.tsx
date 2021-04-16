import React from "react";
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogDataType, MessagesDataType} from "../../redux/state";

export type DialogsPropsType = {
    dialog: Array<DialogDataType>
    message: Array<MessagesDataType>
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialog.map((d: DialogDataType) => {
        return <Dialog name={d.name} id={d.id}/>
    })
    let messageElements = props.message.map((m: MessagesDataType) => {
        return <Message message={m.message} id={m.id}/>
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )

}

export default Dialogs




