import styles from './MyPosts.module.css';
import Post, {PostTypeProps} from "./Post/Post";
import React, {ChangeEvent, ChangeEventHandler} from "react";
import {PostsDataType} from "../../../redux/state";

type MyPostsType = {
    posts: PostsDataType[]
    addPost: (messagePost: string) => void
    newPost: string
    changeNewTextPost:(newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map((p: PostTypeProps) => {
        return <Post post={p.post} id={p.id} likesCount={p.likesCount}/>
    })

    const addPostHandler = () => {
            props.addPost(props.newPost);
            props.changeNewTextPost('')
        }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextPost(e.currentTarget.value)
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