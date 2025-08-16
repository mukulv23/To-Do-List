import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Tasks from '../Components/Tasks'
import Login from '../Components/Login'
import Profile from '../Components/Profile'

const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tasks' element={<Tasks/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </>
  )
}

export default Routing