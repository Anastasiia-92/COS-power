import styles from './Post.module.css';
import avatar from '../../../../img/avatar.png';

export type PostType = {
    id: number
    post : string
}

const Post = (props: PostType) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar"/>
            </div>
            <div className={styles.post}>{props.post}</div>
        </div>
    )
}


export default Post;