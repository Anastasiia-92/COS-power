import React, {ChangeEvent} from "react";
import {PostsDataType, RootStateType} from "../../../redux/store";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// type MyPostsContainerPropsType = {
//     store: ReduxStoreType
// }
// const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     let state = props.store.getState();
//
//     const addPostHandler = (newPost: string) => {
//         props.store.dispatch(addPostAC(newPost))
//         props.store.dispatch(ChangeNewTextAC(""))
//     }
//
//     let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.store.dispatch(ChangeNewTextAC(e.currentTarget.value))
//     }
//
//     return (
//         <MyPosts changeNewTextPost={onPostChangeHandler}
//                  addPostHandler={addPostHandler}
//                  posts={state.profilePage.posts}
//                  newPost={state.profilePage.messageForNewPost}
//         />
//     )
//
// }

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