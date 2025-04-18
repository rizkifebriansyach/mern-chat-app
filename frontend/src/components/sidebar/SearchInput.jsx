import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
    const [search, setSearch] = useState("")
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return
        if (search.length < 3) {
            return toast.error('Search term must be at least 3 characters long')
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")
        } else {
            return toast.error('No such user found!')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex items-center gap-2 p-2'>
            <input
                className='input input-bordered rounded-full'
                type='text'
                placeholder='Search...'
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white border-0'>
                <IoSearchSharp className='h-6 w-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput