import { createSlice } from '@reduxjs/toolkit'



const roomSlice = createSlice({
    name: 'rooms',
    initialState: {
        room: []
    }
    ,
    reducers: {
        fetchRoom(state, action) {

            state.room.push(action.payload)

        },
        ResetRooms(state, action) {
            state.room = []
        },
        cerateRoom(state, action) {
            state.room.push(action.payload)
        },
        setLastMsg(state, action) {
            const room = state.room.find(room => room.id === action.payload.msgData.roomId.chatid)
            console.log(action.payload.msgData.roomId.chatid)
            console.log(room)
            if (room) {
                room.lastMessage = action.payload.msgData
            }
        }
    }

})
export const roomsActions = roomSlice.actions;
export default roomSlice