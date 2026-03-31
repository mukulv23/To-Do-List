import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>To do list</h1>} />
        <Route path='/add' element={<h1>Addd</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />
        <Route path='/login' element={<h1>login</h1>} />
        <Route path='/signup' element={<h1>signup</h1>} />
      </Routes>
      <h1>After navbar</h1>
    </>
  )
}

export default App
