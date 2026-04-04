import React, { useEffect, useState } from 'react'
import style from '../styles/addtask.module.css'
import { useNavigate } from 'react-router-dom';
export const AddTask = ({ edit, id }) => {

  const [task, setTask] = useState("");
  const [desc, setDescription] = useState("");
  const navigate = useNavigate();

  const getFormFill = async (id) => {
    try {
      const res = await fetch(`http://localhost:4200/get-task/${id}`);
      if (!res.ok) throw new Error("Error Occured");
      const data = await res.json();
      setTask(data.task)
      setDescription(data.description)
      console.log(data);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    if(edit && id){
      getFormFill(id);
    }
  },[edit,id])

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

  const handleEdit = async () => {
    try {
      const res = await fetch(`http://localhost:4200/update-task/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          task: task,
          description: desc
        })
      })
      if (!res.ok) throw new Error("Update Failed");
      const data = await res.json();
      console.log(data);
      navigate('/');
    }
    catch (err) {
      console.log(err);
    }
  }
  const title = edit ? "Edit Task" : "Add Task"
  const btnTxt = edit ? "Update" : "Submit"
  const btnFunc = edit ? handleEdit : handleSubmit

  return (
    <>
      <div className={style.task}>
        <div className={style.form}>
          <h1 style={{ color: "#443e3e" }}>{title}</h1>

          <input type="text" placeholder="Enter a Task" name='task' value={task} onChange={(e) => { setTask(e.target.value) }} />
          <input type="text" placeholder="Description" name='description' value={desc} onChange={(e) => { setDescription(e.target.value) }} />

          <button onClick={btnFunc}>{btnTxt}</button>
        </div>
      </div>
    </>
  )
}
