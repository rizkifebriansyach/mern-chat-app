import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className='border-slate-500 border-r p-4 flex flex-col'>
            <SearchInput />
            <div className='divider px-2'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default Sidebar