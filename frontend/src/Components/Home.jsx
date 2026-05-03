import React, { useEffect, useState } from 'react'
import style from '../styles/home.module.css'
import { useNavigate } from 'react-router-dom';
export const Home = () => {

  const [task, setTask] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const navigate = useNavigate();

  const getTasks = async () => {
    try {
      const res = await fetch("http://localhost:4200", {
        method: "get",
        credentials: 'include'
      }
      );
      if (!res.ok) throw new Error("Server Error");
      const data = await res.json();
      setTask(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:4200/delete-task/${id}`, {
        method: "delete",
        credentials: 'include'
      })
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      setTask(prev => prev.filter(val => val._id !== id))
      alert(`Deleted ${data.task}`);
    } catch (error) {
      console.log(error);
    }
  }

  const updateTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:4200/get-task/${id}`, { credentials: 'include' });
      if (!res.ok) throw new Error("Error Occured");
      const data = await res.json();
      console.log(data);
      navigate(`/edit/${data._id}`);
    }
    catch (err) {
      console.log(err)
    }
  }

  const done = async (id) => {
    setTaskDone((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

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
                  <td className={style.taskCol} style={taskDone.includes(val._id) ? { textDecoration: 'line-through', opacity: .5 } : null}><input type="checkbox" onChange={() => done(val._id)} />{val.task}</td>
                  <td className={style.descCol} style={taskDone.includes(val._id) ? { textDecoration: 'line-through', opacity: .5 } : null}>{val.description}</td>
                  <td className={style.updateCol}>
                    <button className={style.update} style={taskDone.includes(val._id) ? { textDecoration: 'line-through', opacity: .5 } : null} onClick={() => updateTask(val._id)}>Update</button>
                  </td>
                  <td className={style.deleteCol}>
                    <button className={style.delete} style={taskDone.includes(val._id) ? { textDecoration: 'line-through', opacity: .5 } : null} onClick={() => deleteTask(val._id)}>Delete</button>
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
