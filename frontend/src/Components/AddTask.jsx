import React from 'react'
import style from '../styles/addtask.module.css'
export const AddTask = () => {
  return (
    <div className={style.task}>
      <form className={style.form} action='/add-task' method='post'>
        <h1 style={{color:"#443e3e"}}>Add Task</h1>

        <input type="text" placeholder="Enter a Task" />
        <input type="text" placeholder="Description" />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
