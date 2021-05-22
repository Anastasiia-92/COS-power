import React from "react";
import {MapDispatchUsersPropsType, MapStateUsersPropsType} from "./UsersContainer";
import {UserStoreType} from "../../redux/redux-store";
import styles from './Users.module.css';

type UsersPropsType = MapStateUsersPropsType & MapDispatchUsersPropsType

export let Users = (props: UsersPropsType) => {
    if(props.users.length === 0){
    props.setUsers([
        {
            id: 1,
            protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
            followed: false,
            fullName: 'Rubeus Hagrid',
            status: 'Like to cooking',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
            followed: true,
            fullName: 'Bertha Jorkins',
            status: 'Just relax...',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 3,
            protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
            followed: true,
            fullName: 'Bellatrix Lestrange',
            status: "I'll teach you to mining",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 4,
            protoUrl: 'https://assets.teenvogue.com/photos/5d1cb84d1531210008bcf449/16:9/w_2560%2Cc_limit/00-promo-sailor-moon.jpg',
            followed: false,
            fullName: 'Luna Lovegood',
            status: "Wish you good day!",
            location: {city: 'Minsk', country: 'Belarus'}
        },

    ])
    }
    return <div>
            {
                props.users.map((u: UserStoreType) => <div key={u.id}>
                    <span>
                        <div className={styles.avatar}>
                            <img src={u.protoUrl}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() =>props.onUnFollowClick(u.id)}>Unfollow</button>
                                : <button onClick={() => props.onFollowClick(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

}