import { useState } from 'react'
import { authActions } from '../reducers/auth';
import firebase from 'firebase'
import { database } from '../../misc/firebase';
import { roomsActions } from '../reducers/rooms';

export const getRoomList = () => {
    const RoomsListRef = database.ref('rooms')
    return async (dispatch) => {
        RoomsListRef.on('value', snap => {
            const snapVal = snap.val()
            if (snapVal) {
                Object.keys(snap.val()).forEach(roomId => {
                    dispatch(roomsActions.fetchRoom({ ...snapVal[roomId], id: roomId }));
                })
                RoomsListRef.off()
            }
        })
    }

}

export const addRoomToList = () => {

    return async (dispatch) => {
        const RoomsListRef = database.ref('rooms')
        RoomsListRef.limitToLast(1).on('value', snap => {
            const snapVal = snap.val()
            Object.keys(snap.val()).forEach(roomId => {
                dispatch(roomsActions.cerateRoom({ ...snapVal[roomId], id: roomId }))
            })
        })

    }
}