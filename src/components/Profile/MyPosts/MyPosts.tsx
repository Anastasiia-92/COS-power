import styles from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";
import React from "react";


let postData: PostType[] = [
    {id: 1, post: 'Hi! How are you?'},
    {id: 2, post: 'What about a movie tonight?'},
    {id: 3, post: "It's cold today(("}
]

let postElements = postData.map((p) => {
    return <Post post={p.post} id={p.id}/>
})

const MyPosts = () => {
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