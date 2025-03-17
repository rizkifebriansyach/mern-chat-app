import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'
import { getRandomEmoji } from '../../utils/emoji'

const Conversations = () => {
    const { loading, conversations } = useGetConversations()
    console.log("CONVERSATIONS: ", conversations)
    return (
        <div className='flex flex-col overflow-auto mb-4'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1} />
            ))}
        </div>
    )
}

export default Conversations