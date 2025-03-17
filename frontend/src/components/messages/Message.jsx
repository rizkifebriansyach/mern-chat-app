import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime'

const Message = ({ message }) => {
    console.log("message ke panggil ga?")
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    const formattedDate = extractTime(message.createdAt)
    const fromMe = message.senderId === authUser._id
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
    const bubbleBgColor = fromMe ? 'bg-blue-500' : ''
    const shakeClass = message.shouldShake ? "shake" : ""

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt='User avatar' />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}${shakeClass} rounded-2xl`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedDate}</div>
        </div>
    )
}

export default Message