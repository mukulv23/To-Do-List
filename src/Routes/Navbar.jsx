import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-black'>
            <div className='bg-black text-white flex relative '>
                <NavLink className='p-3 text-xl hover:text-gray-100' to='/'>Home</NavLink>
                <NavLink className='p-3 text-xl' to='/tasks'>Tasks</NavLink>
                <NavLink className='p-3 text-xl absolute right-20' to='/login'>Login</NavLink>
                <NavLink className='p-3 text-xl absolute right-0' to='/profile'>Profile</NavLink>
            </div>
        </div>
    )
}

export default Navbar