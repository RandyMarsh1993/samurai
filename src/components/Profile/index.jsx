import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'

import { getProfileInfo } from '../../redux/slices/profile-slice'
import SpinnerLoader from '../common/Loaders/SpinnerLoader'

import Posts from './Posts'
import ProfileInfo from './ProfileInfo'

const Profile = ({ isAuth }) => {
    const { userId } = useParams()
    const authData = useSelector(state => state.auth)

    const { info, isLoading } = useSelector(state => state.profile)
    const dispatch = useDispatch()

    const id = userId ? userId : authData.id

    useEffect(() => {
        dispatch(getProfileInfo(id))
    }, [id])

    if (!isAuth) {
        return <Navigate to='/login' />
    }

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
