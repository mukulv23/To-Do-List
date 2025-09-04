import React from 'react'

const Tasks = () => {
  return (
    <div className='flex justify-center m-10'>
      <form className='flex'>
        <input type="text" placeholder='Enter your task' className='h-8 w-96 pl-2 border-black border-t border-l border-b rounded-tl-lg rounded-bl-lg' />
        <button className='bg-blue-700 h-8 text-white w-10 font-medium rounded-tr-lg rounded-br-lg'>Add</button>
      </form>
    </div>
  )
}

export default Tasks