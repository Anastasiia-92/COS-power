import React from "react";
import {UserStoreType} from "../../redux/redux-store";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    pageChanged: (pageNumber: number) => void
    users: Array<UserStoreType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    ;

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? styles.selected : ""}
                        onClick={() => {
                            props.pageChanged(p)
                        }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map((u: UserStoreType) => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.follow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.unfollow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)

            }
        </div>
    )
}

export default Users