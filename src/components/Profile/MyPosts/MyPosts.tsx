import styles from './MyPosts.module.css';
import Post, {PostTypeProps} from "./Post/Post";
import React from "react";
import {MapDispatchMyPostsPropsTyp, MapStateMyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


type MyPostsType = MapStateMyPostsPropsType & MapDispatchMyPostsPropsTyp

type FormDataType = {
    newPostBody: string
}

const MyPosts = (props: MyPostsType) => {
    const addNewPost= (formData: FormDataType) => {
        debugger
        props.addPostHandler(formData.newPostBody)
    }

    let postElements = props.posts.map((p: PostTypeProps) => {
        return <Post post={p.post} id={p.id} likesCount={p.likesCount}/>
    })

    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <div className={styles.title}>My posts</div>
                <div className={styles.myPostsTextArea}>
                    <AddPostFormRedux onSubmit={addNewPost}/>
                </div>
            </div>
            {postElements}
        </div>
    )
}
const maxLengthCreator10 = maxLengthCreator(10)

export const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <Field
                    component={Textarea}
                    name="newPostBody"
                    placeholder="Enter your message"
                    type={"text"}
                    validate = {[required, maxLengthCreator10 ]}
                />
                <div>
                    <button className={styles.button}>Send</button>
                </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataType>({form: "profileAddNewPostForm"})(AddPostForm)

export default MyPosts;

// type MyPostsType = MapStateMyPostsPropsType & MapDispatchMyPostsPropsTyp
//
// const MyPosts = (props: MyPostsType) => {
//
//     let postElements = props.posts.map((p: PostTypeProps) => {
//         return <Post post={p.post} id={p.id} likesCount={p.likesCount}/>
//     })
//
//     return (
//         <div className={styles.wrap}>
//             <div className={styles.item}>
//                 <div className={styles.title}>My posts</div>
//                 <div className={styles.form}>
//                     <textarea value={props.newPost}
//                               onChange={props.changeNewTextPost}
//                               placeholder="your news..."> </textarea>
//                     <button className={styles.button} onClick={() => {props.addPostHandler(props.newPost)}}>Send</button>
//                 </div>
//             </div>
//             {postElements}
//         </div>
//     )
// }
