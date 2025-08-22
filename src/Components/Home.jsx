import React, { useContext, useState } from 'react'
import Context from './Context'

const Home = () => {
  const name = useContext(Context)
  return (
    <h1 className='text-xl text-black font-bold'>Hello {name}</h1>
  )
}

export default Home