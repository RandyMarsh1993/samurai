import React from "react";
import { Posts } from "./Posts";
import { ProfileInfo } from './ProfileInfo';

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <Posts />
        </div>
    )
}
