
import React, {ChangeEvent} from "react";
import {CustomStoreType} from "../../../redux/store";
import {addPostAC, ChangeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {ReduxStoreType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store: ReduxStoreType
}
const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState();

    const addPostHandler = (newPost: string) => {
        props.store.dispatch(addPostAC(newPost))
        props.store.dispatch(ChangeNewTextAC(""))
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value})
    }

    return (
        <MyPosts changeNewTextPost={onPostChangeHandler}
                 addPostHandler={addPostHandler}
                 posts={state.profilePage.posts}
                 newPost={state.profilePage.messageForNewPost}
        />
    )

}
export default MyPostsContainer;