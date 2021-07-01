import React from 'react'
import { Redirect, Route } from 'react-router'
import { useProfile } from '../context/profile.context'
import { useSelector } from 'react-redux'
import Loading from './Loading'

const PriavteRoute = ({ children, ...routeProps }) => {
    const isLoading = useSelector(state => state.UI.isLoading)
    const profile = useSelector(state => state.auth.login)
    if (isLoading && !profile) {
        return <Loading />
    }

    if (!profile && !isLoading) {
        return (
            <Redirect to="/signin" />

        )
    }
    return <Route {...routeProps}>{children}</Route>
}

export default PriavteRoute
