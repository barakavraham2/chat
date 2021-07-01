import React from 'react'
import { Button, Icon } from 'rsuite'
import * as r from 'rsuite'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedOut } from '../../store/actions/auth'
const Dashboard = () => {
    const username = useSelector(state => state.auth.currentUser.name)
    const dispatch = useDispatch()
    const handleLogOutGoogle = () => {
        dispatch(userLoggedOut())
        r.Alert.error('sign out', 4000)
    }
    return (
        <>

            <r.Drawer.Header>
                hello, {username}
            </r.Drawer.Header>

            <r.Drawer.Body>

            </r.Drawer.Body>

            <r.Drawer.Footer>
                <r.Button block color="red" onClick={handleLogOutGoogle}>
                    <Icon icon="google" /> sign out
                </r.Button>
            </r.Drawer.Footer>

        </>
    )
}

export default Dashboard
