import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { useCurrentRoom } from '../../../context/currentRoom.context'
import { transormToArrWithid } from '../../../helpers'
import { database } from '../../../misc/firebase'
import MessageItem from './MessageItem'
const Messages = (roomid) => {
    const currentroom = useCurrentRoom(v => v.currentRoom)

    const { chatid } = useParams()
    const [messages, setMessages] = useState(null)
    const isChatEmpty = messages && messages.length === 0;
    const canShowMessages = messages && messages.length > 0;


    useEffect(() => {

        const msgRef = database.ref('messages')
        msgRef.orderByChild(`roomId/chatid`).equalTo(chatid).on('value', (snap) => {
            const data = transormToArrWithid(snap.val());
            setMessages(data)

        })

        return () => {
            msgRef.off('value')
        }
    }, [chatid])
    return (
        <ul className="msg-list custom-scroll" >
            {isChatEmpty && <li>No message yet</li>}
            {canShowMessages && messages.map(msg => <MessageItem key={msg.id} message={msg} />)}
        </ul>
    )
}

export default Messages
