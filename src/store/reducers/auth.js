import { createSlice } from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: false,
        currentUser: { uid: '', name: '', email: '', createdAt: '' }
    }
    ,
    reducers: {
        loggedin(state, action) {
            state.login = true
            state.currentUser = {
                uid: action.payload.uid,
                name: action.payload.name,
                email: action.payload.email,
                createdAt: action.payload.createdAt
            }
        },
        loggedout(state, action) {
            state.login = false
            state.currentUser = {
                uid: '',
                name: '',
                email: '',
                createdAt: ''
            }
        },
        register(state, action) {
            state.login = true
            state.currentUser = {
                uid: action.payload.uid,
                name: action.payload.name,
                email: action.payload.email,
                createdAt: action.payload.createdAt
            }
        }
    }

})
export const authActions = authSlice.actions;
export default authSlice