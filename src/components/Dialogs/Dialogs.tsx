import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    ActionsTypes,
    addNewMessageTextAC,
    DialogDataType,
    DialogsDataType,
    MessagesDataType,
    sendMessageAC
} from "../../redux/state";

export type DialogsPropsType = {
    state: DialogsDataType
    dispatch:(action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.state.dialogs.map((d: DialogDataType) => {
        return <Dialog name={d.name} id={d.id}/>
    })
    let messageElements = props.state.messages.map((m: MessagesDataType) => {
        return <Message message={m.message} id={m.id}/>
    })
    let newMessageText = props.state.newMessageText
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(addNewMessageTextAC(body))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.dialogs}>
                {dialogElements}
            </div>
            <div className={styles.messages}>
                <div>{messageElements}</div>
                <div className={styles.textarea}>
                    <textarea
                        placeholder={"Enter your message"}
                        onChange={onNewMessageChange}
                        value={newMessageText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )

}

export default Dialogs




