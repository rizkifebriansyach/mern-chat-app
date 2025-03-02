import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
    return (
        <form className='flex items-center gap-2 p-2'>
            <input
                className='input input-bordered rounded-full'
                type='text'
                placeholder='Search...' />
            <button className='btn btn-circle bg-sky-500 text-white border-0'>
                <IoSearchSharp className='h-6 w-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput