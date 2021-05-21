import styles from './MyPosts.module.css';
import Post, {PostTypeProps} from "./Post/Post";
import React, {ChangeEvent} from "react";
import {PostsDataType} from "../../../redux/store";


type MyPostsType = {
    changeNewTextPost: (e:ChangeEvent<HTMLTextAreaElement> ) => void
    addPostHandler:(newPost: string) => void
    posts: PostsDataType[]
    newPost: string
}

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map((p: PostTypeProps) => {
        return <Post post={p.post} id={p.id} likesCount={p.likesCount}/>
    })

    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.title}>My posts</div>
                <div className={styles.form}>
                    <textarea value={props.newPost}
                              onChange={props.changeNewTextPost}
                              placeholder="your news..."> </textarea>
                    <button className={styles.button} onClick={() => {props.addPostHandler(props.newPost)}}>Send</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}


export default MyPosts;