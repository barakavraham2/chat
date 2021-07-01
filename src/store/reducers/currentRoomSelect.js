import { createSlice } from '@reduxjs/toolkit'

const currentRoomSelectSlice = createSlice({
    name: 'currentRoomSelect',
    initialState: {
        room: ''
    }
    ,
    reducers: {
        newRoom(state, action) {
            state.room = action.payload
        }
    }

})
export const currentRoomSelectActions = currentRoomSelectSlice.actions;
export default currentRoomSelectSlice