import styles from './MyPosts.module.css';
import Post, {PostTypeProps} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {ActionsTypes, addPostAC, ChangeNewTextAC, PostsDataType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsDataType[]
    // addPost: (messagePost: string) => void
    newPost: string
    // changeNewTextPost:(newText: string) => void
    dispatch:(action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map((p: PostTypeProps) => {
        return <Post post={p.post} id={p.id} likesCount={p.likesCount}/>
    })

    const addPostHandler = () => {
            // props.addPost(props.newPost);
            // props.changeNewTextPost('')
        props.dispatch(addPostAC(props.newPost))
        props.dispatch(ChangeNewTextAC(""))
        }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value })
        // props.changeNewTextPost(e.currentTarget.value)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.title}>My posts</div>
                <div className={styles.form}>
                    <textarea value={props.newPost}
                              onChange={onPostChangeHandler}
                              placeholder="your news..."> </textarea>
                    <button className={styles.button} onClick={addPostHandler}>Send</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}


export default MyPosts;