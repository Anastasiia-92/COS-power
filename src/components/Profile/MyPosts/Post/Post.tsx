import styles from './Post.module.css';
import avatar from '../../../../img/avatar.png';


export type PostTypeProps = {
    id: number
    post: string
    likesCount: number
}

const Post = (props: PostTypeProps) => {
    return (
        <div className={styles.postWrap}>
            <div className={styles.wrap}>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.post}>{props.post}</div>
            </div>
            <div className={styles.likesCount}>{props.likesCount} likes</div>
        </div>
    )
}


export default Post;