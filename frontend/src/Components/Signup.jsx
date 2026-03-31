import React from 'react'

export const Signup = () => {
  return (
    <>
      <div className="form">
        <form action="/signup" method='post'>
          <input type="text" placeholder='Enter your name' />
          <input type="email" placeholder='Enter your email' />
          <input type="password" placeholder='Enter your password' />
          <button>submit</button>
        </form>
      </div>
    </>
  )
}
