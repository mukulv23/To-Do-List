import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { Profile } from './Components/Profile'
import { AddTask } from './Components/AddTask'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { EditTask } from './Components/EditTask'

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddTask />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/edit/:id' element={<EditTask />} />
          <Route path='*' element={<h1>Error</h1>} />
        </Routes>
      </main>
    </>
  )
}

export default App
