import React from "react";
import {ReduxStoreType, UsersStoreType, UserStoreType} from "../../redux/redux-store";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import axios from "axios";
import {MapDispatchUsersPropsType, MapStateUsersPropsType} from "./UsersContainer";

type UsersPropsType = MapStateUsersPropsType & MapDispatchUsersPropsType

class UsersC extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {

        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.users.map((u: UserStoreType) => <div key={u.id}>
                    <span>
                        <div className={styles.avatar}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.onUnFollowClick(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.onFollowClick(u.id)}>Follow</button>}
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
}

export default UsersC