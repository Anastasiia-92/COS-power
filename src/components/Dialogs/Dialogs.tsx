import React from "react";
import styles from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

type DialogsTypeProps = {
    id: number,
    name: string
}
type MessageTypeProps = {
    id: number,
    message: string
}

const Dialogs = () => {
    let dialogData: DialogsTypeProps[] = [
        {id: 1, name: 'Bertha Jorkins'},
        {id: 2, name: 'Rubeus Hagrid'},
        {id: 3, name: 'Bellatrix Lestrange'},
        {id: 4, name: 'Luna Lovegood'}
    ]
    let messageData:MessageTypeProps[] = [
        {id: 1, message: "Hello! How do you feel about going to the movies today?"},
        {id: 2, message: "Oh, great idea! I have not visited cinema for ages."},
    ]

    let dialogElements = dialogData.map((d) => {
        return <Dialog name={d.name} id={d.id}/>
    })
    let messageElements = messageData.map((m) => {
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




