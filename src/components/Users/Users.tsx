import React from "react";
import {UserStoreType} from "../../redux/redux-store";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser} from "../../api/api";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    pageChanged: (pageNumber: number) => void
    users: Array<UserStoreType>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    isFetching: boolean
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(100 / props.pageSize);

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
                                <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    unfollowUser(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    followUser(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })
                                }}>Follow</button>}
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