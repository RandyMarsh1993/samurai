import React from "react";
import { Posts } from "./Posts";
import { ProfileInfo } from './ProfileInfo';

export const Profile = ({ state, dispatch }) => {
    const { posts, newPostText } = state
    return (
        <div>
            <ProfileInfo />
            <Posts
                posts={posts}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </div>
    )
}
