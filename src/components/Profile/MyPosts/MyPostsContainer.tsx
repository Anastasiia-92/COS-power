import React, {ChangeEvent} from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PostsDataType, RootStateType} from "../../../redux/redux-store";

export type MapStateMyPostsPropsType = {
    posts: PostsDataType[]

}
export type MapDispatchMyPostsPropsTyp = {
    addPostHandler: (messagePost: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateMyPostsPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchMyPostsPropsTyp => {
    return {
        addPostHandler: (newPostBody: string) => {
            dispatch(addPostAC(newPostBody))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;