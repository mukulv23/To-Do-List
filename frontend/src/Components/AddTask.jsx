import React, { useState } from 'react'
import style from '../styles/addtask.module.css'
export const AddTask = () => {

  const [task, setTask] = useState("");
  const [desc, setDescription] = useState("");
  const handleSubmit = async () => {
    await fetch("http://localhost:4200/add-task", {
      method: "post",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        task: task,
        description: desc
      })
    });
  }

  return (
    <div className={style.task}>
      <div className={style.form} onSubmit={handleSubmit}>
        <h1 style={{ color: "#443e3e" }}>Add Task</h1>

        <input type="text" placeholder="Enter a Task" name='task' onChange={(e) => { setTask(e.target.value) }} />
        <input type="text" placeholder="Description" name='description' onChange={(e) => { setDescription(e.target.value) }} />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
