import React, { useEffect, useState } from 'react'
import styles from '../styles/profile.module.css'
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("login")))
  }, [])

  const navigate = useNavigate();
  if (user == null)
    return <p>Loading....</p>

  const pfp = async () => {
    if (!img) {
      alert("Please Select the image")
      return
    }
    const formData = new FormData();
    formData.append("pfp", img);
    await fetch("http://localhost:4200/upload", {
      method: "POST",
      body: formData,
      credentials: 'include'
    })
  }

  return <>
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2>Hi {user.name}!</h2>
        <div className={styles.circle}>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <button onClick={pfp}>send</button>
        </div>
        <p>{user.email}</p>
        <button className={styles.logoutBtn} onClick={() => {
          localStorage.removeItem("login");
          navigate('/login');
        }}>Logout</button>
      </div>
    </div>
  </>
}