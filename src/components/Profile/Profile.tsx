import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/redux-store";

type ProfilePropsType = {
    userProfile: UserProfileType | null
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;