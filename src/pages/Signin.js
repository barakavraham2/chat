import React, { useEffect } from 'react'
import { Container, Grid, Row, Col, Panel, Button, Icon, Alert } from 'rsuite'
import { auth, database } from '../misc/firebase'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/reducers/auth'
import { userLoggedIn, userRegister } from '../store/actions/auth'

function Signin() {
    const dispatch = useDispatch()
    const signInWithProvider = async Provider => {
        try {
            const { additionalUserInfo, user } = await auth.signInWithPopup(Provider)

            if (additionalUserInfo.isNewUser) {
                dispatch(userRegister(user))
            }
            else {
                dispatch(userLoggedIn())
            }
            Alert.success(`sign in`, 4000)
        } catch (error) {
            Alert.error(error.message, 4000)
        }

    }

    const onFacebookSignin = () => {
        signInWithProvider(new firebase.auth.FacebookAuthProvider())
    }
    const onGoogleSignin = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider())
    }
    return (
        <Container>
            <Grid className="mt-page">
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className="text-center">
                                <h2>Welcome to chat platforme</h2>
                                <p>connect pepole</p>
                            </div>
                            <div className="mt-3">
                                <Button block color="blue" onClick={onFacebookSignin}>
                                    <Icon icon="facebook" /> continue with facebook
                                </Button>
                                <Button block color="red" onClick={onGoogleSignin}>
                                    <Icon icon="google" /> continue with google
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    )
}

export default Signin
