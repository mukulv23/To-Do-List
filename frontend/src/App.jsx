import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Profile } from './Components/Profile'
import { AddTask } from './Components/AddTask'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddTask />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </>
  )
}

export default App
