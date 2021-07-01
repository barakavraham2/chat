import React from 'react'
import TimeAgo from 'timeago-react'
const MessagesItem = ({ message }) => {
    const { author, text, createdAt } = message
    return (
        <li className="padded mb-1">
            <div className="d-flex align-items-center font-bolder mb-1">
                <span className="ml-2">{author.name}</span>
                <TimeAgo datetime={new Date(createdAt)} className="font-normal text-black-45 ml-2" />
            </div>
            <div>
                <span className="word-break-all">{text}</span>
            </div>
        </li>
    )
}

export default MessagesItem
