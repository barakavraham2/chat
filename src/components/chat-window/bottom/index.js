import React from 'react'
import { Profiler } from 'react'
import { useState } from 'react'
import { Input, InputGroup, Icon, Alert } from 'rsuite'
import firebase from 'firebase/app'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { database } from '../../../misc/firebase'
import { roomsActions } from '../../../store/reducers/rooms'
function assembleMeassage(profile, chatId) {
    return {
        roomId: chatId,
        author: {
            name: profile.name,
            uid: profile.uid,
            ...(profile.Avatar ? { avatar: profile.avatar } : {})
        },
        createdAt: firebase.database.ServerValue.TIMESTAMP
    }

}
const Bottom = () => {
    const [input, setInput] = useState()
    const profile = useSelector(state => state.auth.currentUser)
    const chatid = useParams()
    const dispatch = useDispatch()
    const onSendClick = async () => {

        if (input === '') {
            return;
        }
        const msgData = assembleMeassage(profile, chatid)
        msgData.text = input;

        const updates = {}
        const messageId = database.ref('messages').push().key;
        updates[`/messages/${messageId}`] = msgData;
        updates[`/rooms/${chatid.chatid}/lastMessage`] = {
            ...msgData,
            msgId: messageId
        }
        try {
            await database.ref().update(updates)
            setInput('')
            dispatch(roomsActions.setLastMsg(msgData))
        }
        catch (error) {

        }
    }
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            onSendClick()
        }
    }

    return (
        <div>
            <InputGroup>
                <Input placeholder="enter message" onChange={(e) => { setInput(e) }} onKeyDown={onKeyDown} value={input || ''} />
                <InputGroup.Button color="blue" appearance="primary" onClick={onSendClick} >
                    <Icon icon="send" />
                </InputGroup.Button>
            </InputGroup>
        </div>
    )
}

export default Bottom
