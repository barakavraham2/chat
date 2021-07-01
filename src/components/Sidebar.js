import React from 'react'
import DashboardToggle from '../components/dashboard/DashboardToggle'
import * as r from 'rsuite'
import CreateRoomBtnModal from './CreateRoombtnModal'
import RoomList from './RoomList'
const Sidebar = () => {
    return (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <r.Divider>join conversation</r.Divider>
                <RoomList />
            </div>
        </div>
    )
}

export default Sidebar
