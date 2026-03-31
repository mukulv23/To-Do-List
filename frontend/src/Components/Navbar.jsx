import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../styles/navbar.module.css';
export const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <NavLink to='/'>To do List</NavLink>
        <ul>
          <li><NavLink to='/add'>Add Task</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/signup'>Signup</NavLink></li>
          <li><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
      </div>
    </>
  )
}
