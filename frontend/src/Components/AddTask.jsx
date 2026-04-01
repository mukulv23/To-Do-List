import React, { useEffect, useState } from 'react'
import style from '../styles/addtask.module.css'
import { useNavigate } from 'react-router-dom';
export const AddTask = () => {

  const [task, setTask] = useState("");
  const [desc, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:4200/add-task", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          task: task,
          description: desc
        })
      });
      if (!res.ok) throw new Error("Server Error")

      const data = await res.json();
      console.log(data);
      navigate('/');
    }
    catch (err) {
      console.log("Error : ", err);
    }
  }

  return (
    <div className={style.task}>
      <div className={style.form}>
        <h1 style={{ color: "#443e3e" }}>Add Task</h1>

        <input type="text" placeholder="Enter a Task" name='task' value={task} onChange={(e) => { setTask(e.target.value) }} />
        <input type="text" placeholder="Description" name='description' value={desc} onChange={(e) => { setDescription(e.target.value) }} />

        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
