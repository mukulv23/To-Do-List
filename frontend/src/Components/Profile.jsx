import React, { useEffect, useState } from 'react'
import styles from '../styles/profile.module.css'
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState();
  const [pfpImg, setPfpImg] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("login")))
  }, [])

  const navigate = useNavigate();
  if (user == null)
    return <p>Loading....</p>

  const sendImage = async () => {
    if (!img) {
      alert("Please Select the image")
      return
    }
    const formData = new FormData();
    formData.append("pfp", img);
    const response = await fetch("http://localhost:4200/upload", {
      method: "POST",
      body: formData,
      credentials: 'include'
    })
    const data = await response.json();

    const imageUrl = `http://localhost:4200/${data.data.image}`
    setPfpImg(imageUrl);
    console.log(imageUrl);
  }

  return <>
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2>Hi {user.name}!</h2>
        <div className={styles.circle} style={pfpImg ? { backgroundImage: `url(${pfpImg})` } : {background:`url(${'favicon.jpg'})`}}>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <button onClick={sendImage}>send</button>
        </div>
        <p>{user.email}</p>
        <button className={styles.logoutBtn} onClick={() => {
          localStorage.removeItem("login");
          navigate('/login');
        }}>Logout</button>
      </div>
    </div >
  </>
}