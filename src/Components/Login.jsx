import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const API = "http://localhost:3000/users"

  const [userName, setUserName] = useState("")
  const [pass, setPass] = useState('');
  const [pending, setPending] = useState(false)
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem(`user_${userName}`));

  const send = () => {
    if (userName === user.username && pass === user.password) {
      navigate('/');
    }
  }


  return (
    <div className="box">
      <div className="box-1">
        <h1 className='h1'>Login</h1>
        <form className='form'>
          <input type="text" placeholder='Enter username' className='Input' onChange={(e) => setUserName(e.target.value)} />
          <input type="password" placeholder='Enter password' className='Input' onChange={(e) => setPass(e.target.value)} />
          <button type='button' className='loginBtn' disabled={pending} onClick={send}>Submit</button>
          <div className="div">
            <span>Don't have account?</span> <a href="" className='text-blue-700 font-semibold'>Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login