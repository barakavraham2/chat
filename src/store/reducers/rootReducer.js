import { combineReducers } from 'redux'
import authSlice from './auth'
import currentRoomSelectSlice from './currentRoomSelect'
import roomSlice from './rooms'
import UISlice from './UI'

// action creator
export default combineReducers({
    auth: authSlice.reducer,
    UI: UISlice.reducer,
    rooms: roomSlice.reducer,
    currentRoomSelect: currentRoomSelectSlice.reducer
})