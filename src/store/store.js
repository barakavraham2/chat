import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]
const store = configureStore({ reducer }, applyMiddleware(...middleware))

export default store;