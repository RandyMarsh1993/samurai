import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, updateNewPostText } from '../../../redux/slices/profile-slice'

import PostItem from './PostItem/PostItem'

import style from './style.module.css'

const Posts = () => {
    const { posts, newPostText } = useSelector(state => state.profile)
    const dispatch = useDispatch()

    const postItems = posts.map(post => <PostItem key={post.id} text={post.text} />)

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

export default Posts
