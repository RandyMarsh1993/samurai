import React from "react";
import { addPost, updateNewPostText } from '../../../redux/actionCreators/profile';
import { PostItem } from "./PostItem/PostItem";
import style from './style.module.css'

export const Posts = ({ posts, newPostText, dispatch }) => {
    let postItems = posts.map(post => <PostItem key={post.id} text={post.text} />)

    const onInputChange = (e) => {
        dispatch(updateNewPostText(e.target.value))
    }

    const onAddPost = () => {
        dispatch(addPost())
    }

    return (
        <div>
            <p>Posts</p>
            <div className={style.controls}>
                <textarea value={newPostText} onChange={onInputChange} />
                <div>
                    <button onClick={onAddPost}>Add post</button>    
                </div>
            </div>
            { postItems }
        </div>
    )
}
