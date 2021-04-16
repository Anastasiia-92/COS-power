import styles from './MyPosts.module.css';
import Post, {PostTypeProps} from "./Post/Post";
import React from "react";
import {PostsTypeProps} from "../Profile";


const MyPosts = (props: PostsTypeProps) => {

    let postElements = props.posts.map((p: PostTypeProps) => {
        return <Post post={p.post} id={p.id}/>
    })
    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.title}>My posts</div>
                <div className={styles.form}>
                    <textarea placeholder="your news..." name="text"> </textarea>
                    <button className={styles.button} type="submit">Send</button>
                </div>
            </div>
            {postElements}
        </div>
    )
}


export default MyPosts;