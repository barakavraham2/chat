import React from 'react'
import { useHistory, useParams } from 'react-router'
import Top from '../components/chat-window/top'
import Bottom from '../components/chat-window/bottom'
import Messages from '../components/chat-window/Messages'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { CurrentRoomProvider } from '../context/currentRoom.context'

const Chat = () => {
    const { chatid } = useParams()

    const rooms = useSelector(state => state.rooms.room)
    const currentRoom = rooms.find(room => room.id === chatid)


    const currentRoomData = {
        name: currentRoom.name,
        description: currentRoom.description,
        currentRoom: currentRoom
    }
    return (
        <CurrentRoomProvider data={currentRoomData}>
            <div className="chat-top">
                <Top />
            </div>

            <div className="chat-middle">
                <Messages roomid={chatid} />
            </div>

            <div className="chat-bottom">
                <Bottom />
            </div>
        </CurrentRoomProvider>
    )
}

export default Chat
