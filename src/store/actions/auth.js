import { useState } from 'react'
import { auth, database } from "../../misc/firebase"
import { authActions } from '../reducers/auth';
import firebase from 'firebase'
import { UIActions } from '../reducers/UI';

export const userLoggedIn = () => {
    return async (dispatch) => {
        let userRef;
        const authOnSub = auth.onAuthStateChanged(authObj => {
            if (authObj) {
                userRef = database.ref(`/profiles/${authObj.uid}`);
                userRef.on('value', (snap) => {
                    const data = {
                        name: authObj.displayName,
                        uid: authObj.uid,
                        email: authObj.email,
                    }
                    dispatch(authActions.loggedin(data))
                    dispatch(UIActions.EndOfLoading())
                })
            }
            else {
                dispatch(UIActions.EndOfLoading())
            }
        })
    }
}


export const userRegister = (user) => {
    return async (dispatch) => {
        await database.ref(`/profiles/${user.uid}`).set({
            name: user.displayName,
            createdAt: firebase.database.ServerValue.TIMESTAMP
        })
        dispatch(authActions.register({
            uid: user.uid,
            name: user.displayName,
            creatadAt: firebase.database.ServerValue.TIMESTAMP,
            email: user.email
        }))
    }
}

export const userLoggedOut = () => {
    return async (dispatch) => {
        await auth.signOut().then(() => {
            dispatch(authActions.loggedout())
        }
        )

    }
}