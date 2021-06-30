import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/redux-store";


type ProfilePropsType = {
    userProfile: UserProfileType | null
    status: string
    updateStatus: (status: string) => void

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo
                userProfile={props.userProfile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;