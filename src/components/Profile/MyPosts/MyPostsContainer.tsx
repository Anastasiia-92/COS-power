import React, {ChangeEvent} from "react";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PostsDataType, RootStateType} from "../../../redux/redux-store";

export type MapStateMyPostsPropsType = {
    posts: PostsDataType[]
    newPost: string
}
export type MapDispatchMyPostsPropsTyp = {
    changeNewTextPost: (newText: ChangeEvent<HTMLTextAreaElement>) => void
    addPostHandler: (messagePost: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateMyPostsPropsType => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.messageForNewPost
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchMyPostsPropsTyp => {
    return {
        changeNewTextPost: (e: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(ChangeNewTextAC(e.currentTarget.value))
        },
        addPostHandler: (newPost: string) => {
            dispatch(addPostAC(newPost))
            dispatch(ChangeNewTextAC(""))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;