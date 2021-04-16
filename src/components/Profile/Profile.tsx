import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import {PostsDataType} from "../../redux/state";

export type PostsTypeProps = {
    posts: Array<PostsDataType>
}

const Profile = (props: PostsTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}


export default Profile;