import React from 'react'
import { BiSend } from 'react-icons/bi'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='w-full relative'>
        <input
          className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
          type='text'
          placeholder='Send a message' />
        <button
          type='submit'
          className='absolute inset-y-0 end-0 flex items-center pe-3 hover:cursor-pointer'>
          <BiSend className='text-white w-6 h-6' />
        </button>
      </div>
    </form>
  )
}

export default MessageInput