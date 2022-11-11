import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import { getProfileInfo } from '../../redux/slices/profile-slice'
import SpinnerLoader from '../common/Loaders/SpinnerLoader'

import Posts from './Posts'
import ProfileInfo from './ProfileInfo'

const Profile = () => {
    const { userId } = useParams()
    const authData = useSelector(state => state.auth)

    const isLoading = useSelector(state => state.profile.isLoading)
    const dispatch = useDispatch()

    const id = userId ? userId : authData.id

    useEffect(() => {
        dispatch(getProfileInfo(id))
    }, [id])

    if (!id && !authData.isAuth) {
        return <Navigate to='/login' />
    }

    if (isLoading) {
        return <SpinnerLoader />
    }

    return (
        <div>
            <ProfileInfo authUserId={authData.id} />
            <Posts />
        </div>
    )
}

export default Profile
