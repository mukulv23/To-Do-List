import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between text-white bg-black'>
            <div className='flex'>
                <NavLink className='p-3 text-xl hover:text-gray-100' to='/'>Home</NavLink>
                <NavLink className='p-3 text-xl hover:text-gray-100' to='/tasks'>Tasks</NavLink>
            </div>
            <div className='flex'>
                <NavLink className='p-3 text-xl hover:text-gray-100' to='/login'>Login</NavLink>
                <NavLink className='p-3 text-xl hover:text-gray-100' to='/signup'>Sign Up</NavLink>
                <NavLink className='p-3 text-xl hover:text-gray-100' to='/profile'>Profile</NavLink>
            </div>
        </div>

    )
}

export default Navbar