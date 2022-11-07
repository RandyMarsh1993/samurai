import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getIsAuth } from '../../redux/slices/auth-slice'
import { getProfileInfo } from '../../redux/slices/profile-slice'
import SpinnerLoader from '../common/Loaders/SpinnerLoader'

import Posts from './Posts'
import ProfileInfo from './ProfileInfo'

const Profile = () => {
    const { userId } = useParams()
    const authData = useSelector(state => state.auth)

    const { info, isLoading } = useSelector(state => state.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIsAuth())
    }, [])

    const id = userId ? userId : authData.id
    console.log('id', id)

    useEffect(() => {
        dispatch(getProfileInfo(id))
    }, [id])

    if (isLoading) {
        return <SpinnerLoader />
    }

    return (
        <div>
            <ProfileInfo info={info} />
            <Posts />
        </div>
    )
}

export default Profile
