import React from 'react'
import { connect } from 'react-redux'

import { addPost, updateNewPostText } from '../../../redux/actionCreators/profile'
import PostItem from './PostItem/PostItem'

import style from './style.module.css'

const Posts = ({ posts, newPostText, addPost, updateNewPostText }) => {
    let postItems = posts.map(post => <PostItem key={post.id} text={post.text} />)

    const onInputChange = (e) => {
        updateNewPostText(e.target.value)
    }

    const onAddPost = () => {
        addPost()
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

const mapStateToProps = (state) => ({
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
})

const mapDispatchToProps = { addPost, updateNewPostText }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
