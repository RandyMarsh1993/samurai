import React from "react";
import { PostItem } from "./PostItem/PostItem";
import style from './style.module.css'

export const Posts = () => {
    return (
        <div>
            <p>Posts</p>
            <div className={style.controls}>
                <textarea />
                <div>
                    <button>Add post</button>    
                </div>
            </div>
            <PostItem text="Hello" />
            <PostItem text="First post" />
        </div>
    )
}