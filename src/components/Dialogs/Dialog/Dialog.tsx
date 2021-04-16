import React from "react";
import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogTypeProps = {
    id: number,
    name: string
}

const Dialog = (props: DialogTypeProps) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.dialog}>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}


export default Dialog




