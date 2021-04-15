import React from "react";
import styles from './../Dialogs.module.css';



export type MessageTypeProps = {
    id: number,
    message: string
}

const Message = (props: MessageTypeProps) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    )
}


export default Message




