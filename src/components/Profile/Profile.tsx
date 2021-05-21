
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import {CustomStoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";

export type PostsTypeProps = {
    store: ReduxStoreType
}

const Profile = (props: PostsTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer  store={props.store}/>
        </div>
    )
}


export default Profile;