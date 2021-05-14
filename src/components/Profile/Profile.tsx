import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

export type PostsTypeProps = {
    state: ProfilePageType
    // addPost: (messagePost: string) => void
    // changeNewTextPost:(newText: string) => void
    dispatch:(action: ActionsTypes) => void
}

const Profile = (props: PostsTypeProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     // addPost={props.addPost}
                     newPost={props.state.messageForNewPost}
                     // changeNewTextPost={props.changeNewTextPost}
                     dispatch={props.dispatch}
            />
        </div>
    )
}


export default Profile;