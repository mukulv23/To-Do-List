import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-black text-white flex'>
                <NavLink className='p-3' to='/'>Home</NavLink>
                <NavLink className='p-3' to='/tasks'>Tasks</NavLink>
                <NavLink className='p-3' to='/login'>Login</NavLink>
                <NavLink className='p-3 absolute right-0' to='/profile'>Profile</NavLink>
            </div>
        </>
    )
}

export default Navbar