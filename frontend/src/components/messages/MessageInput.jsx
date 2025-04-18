import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          type='text'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)} />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-3 hover:cursor-pointer'>
          {loading ? <div className='loading loading-spinner' /> : <BiSend className='text-white w-6 h-6' />}
        </button>
      </div>
    </form>
  )
}

export default MessageInput