import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogDataType, DialogsDataType, MessagesDataType} from "../../redux/store";
import {MapDispatchDialogsPropsType, MapStateDialogsPropsType} from "./DialogsContainer";


// export type DialogsPropsType = {
//     addNewMessageText: (body: ChangeEvent<HTMLTextAreaElement>) => void
//     sendMessageClick: () => void
//     dialogsPage: DialogsDataType
// }
export type DialogsPropsType = MapStateDialogsPropsType & MapDispatchDialogsPropsType


const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsPage.dialogs.map((d: DialogDataType) => {
        return <Dialog name={d.name} id={d.id}/>
    })
    let messageElements = props.dialogsPage.messages.map((m: MessagesDataType) => {
        return <Message message={m.message} id={m.id}/>
    })
    let newMessageText = props.dialogsPage.newMessageText

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
                        onChange={props.addNewMessageText}
                        value={newMessageText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={props.sendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )

}

export default Dialogs




