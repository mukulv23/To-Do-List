import React, { useEffect, useState } from 'react'
import style from '../styles/home.module.css'
export const Home = () => {

  const [task, setTask] = useState([]);

  const getTasks = async () => {
    const data = await fetch("http://localhost:4200");
    const res = await data.json();
    setTask(res);
    console.log(res);
  }
  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    const data = await fetch(`http://localhost:4200/delete-task/${id}`, {
      method: "delete"
    })
    alert("Deleted");
  }


  return (
    <>
      {task.length > 0 ? <div className={style.parent}>
        <div className={style.show}>
          <table className={style.table}>

            <thead>
              <tr>
                <th className={style.taskCol}>Task</th>
                <th className={style.descCol}>Description</th>
                <th className={style.updateCol}>Update</th>
                <th className={style.deleteCol}>Delete</th>
              </tr>
            </thead>

            <tbody>
              {task.map((val, index) => (
                <tr key={index}>
                  <td className={style.taskCol}>{val.task}</td>
                  <td className={style.descCol}>{val.description}</td>
                  <td className={style.updateCol}>
                    <button className={style.update}>Update</button>
                  </td>
                  <td className={style.deleteCol}>
                    <button className={style.delete} onClick={() => deleteTask(val._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> : <h1>Please Enter Some Task <a href="/add">Add</a></h1>}
    </>
  )
}
