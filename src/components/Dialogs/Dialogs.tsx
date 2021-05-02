import React from "react";
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogDataType, DialogsDataType, MessagesDataType} from "../../redux/state";

export type DialogsPropsType = {
    state: DialogsDataType
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.state.dialogs.map((d: DialogDataType) => {
        return <Dialog name={d.name} id={d.id}/>
    })
    let messageElements = props.state.messages.map((m: MessagesDataType) => {
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




