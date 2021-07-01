import React from 'react'
import { useSelector } from 'react-redux';
import TimeAgo from 'timeago-react';

const RoomItem = ({ room }) => {
    return (

        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h5>{room.name}</h5>
                <TimeAgo datetime={room.lastMessage ? new Date(room.lastMessage.createdAt) : new Date(room.createdAt)} />
            </div>
            <div className=" d-flex align-items-center text-black-70">
                {room.lastMessage ?
                    <>
                        <div className=" text-disappear ml-2">
                            <div>
                                <div className="italic font-bolder">{room.lastMessage.author.name}</div>
                                <span>{room.lastMessage.text}</span>
                            </div>
                        </div>
                    </> :
                    <span>no massege yet...</span>
                }

            </div>
        </div>


    )
}

export default RoomItem
