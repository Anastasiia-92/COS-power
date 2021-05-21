
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import {CustomStoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ReduxStoreType} from "../../redux/redux-store";


const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;