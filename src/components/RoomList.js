import React, { useEffect } from 'react'
import RoomItem from './rooms/RoomItem'
import { getRoomList } from '../store/actions/rooms'
import { useDispatch, useSelector } from 'react-redux'
import { Nav } from 'rsuite'
import { Link, useHistory, useLocation } from 'react-router-dom'

const RoomList = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory();
    const roomDeitals = useSelector(state => state.rooms.room)

    return (
        <Nav appearance="subtle" vertical reversed className="overflow-y-scroll custom-scroll" activeKey={location.pathname}>
            {
                roomDeitals.map(room => {
                    return <Nav.Item key={room.id} componentClass={Link} to={`/chat/${room.id}`} eventKey={`/chat/${room.id}`} >
                        <RoomItem room={room} />
                    </Nav.Item>
                })
            }


        </Nav>
    )
}

export default RoomList
