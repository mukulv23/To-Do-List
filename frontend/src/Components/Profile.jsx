import React, { useEffect, useState } from 'react'
import styles from '../styles/profile.module.css'
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState(null);
  const [pfpImg, setPfpImg] = useState(null);

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

    const imageUrl = `http://localhost:4200/${data.data.savedImage}`
    setPfpImg(imageUrl);

    const updatedUser = { ...user, pfp: imageUrl }
    localStorage.setItem("login", JSON.stringify(updatedUser));
    setUser(updatedUser);
  }

  return <>
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2>Hi {user.name}!</h2>

        <div className={styles.circle} style={{
          backgroundImage: `url(${pfpImg || user.pfp || "DefaultPfp.jpg"})`
        }}>
          <input
            id="fileInput"
            type="file"

            onChange={(e) => {
              const file = e.target.files[0];
              setImg(file);

              if (file) {
                setPfpImg(URL.createObjectURL(file));
              }
            }}
          />
          <button onClick={sendImage}>send</button>
        </div>

        <p>{user.email}</p>
        <button className={styles.logoutBtn} onClick={() => {
          localStorage.removeItem('login');
          navigate('/login');
        }}>Logout</button>
      </div>
    </div >
  </>
}