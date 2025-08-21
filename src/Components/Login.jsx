import React from 'react'

const Login = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="h-2/5 w-1/3 border-2 border-black rounded-2xl flex gap-y-3 flex-col text-center pt-1">
          <h1 className='text-black text-4xl font-bold mt-3'>Login</h1>
          <form className='h-48 flex flex-col items-center gap-y-3'>
            <input type="text" placeholder='Enter email or username' className='border-black border-2 w-11/12 rounded-md p-2 placeholder-black' />
            <input type="password" placeholder='Enter password' className='border-black border-2 w-11/12 rounded-md p-2 placeholder-black' />
            <button className='bg-blue-700 text-white rounded w-20 h-10 font-bold'>Submit</button>
            <div className="div">
              <span>Don't have account?</span> <a href="" className='text-blue-700 font-semibold'>Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login