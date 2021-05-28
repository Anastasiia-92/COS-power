import React from "react";
import {MapDispatchUsersPropsType, MapStateUsersPropsType} from "./UsersContainer";
import {UserStoreType} from "../../redux/redux-store";
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png"

type UsersPropsType = MapStateUsersPropsType & MapDispatchUsersPropsType

export let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })

        }
    }
    return <div>
        <button onClick={getUsers}> Get Users</button>
        {
            props.users.map((u: UserStoreType) => <div key={u.id}>
                    <span>
                        <div className={styles.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.onUnFollowClick(u.id)}>Unfollow</button>
                                : <button onClick={() => props.onFollowClick(u.id)}>Follow</button>}
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

}