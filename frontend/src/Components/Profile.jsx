import React, { useEffect, useState } from 'react'
import styles from '../styles/profile.module.css'
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const [user, setUser] = useState(null);
  const [img, setImg] = useState(null);
  const [pfpImg, setPfpImg] = useState(null);
  const [show, setShow] = useState(false);

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
    setShow(!show);
  }

  return <>
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2>Hi {user.name}!</h2>

        <div
          className={styles.circle}
          onClick={() => {
            document.getElementById("fileInput").click()
            setShow(!show);
          }}
          style={{
            backgroundImage: `url(${pfpImg || user.pfp || "DefaultPfp.jpg"})`
          }}
        ></div>

        <input
          id="fileInput"
          type="file"
          hidden
          onChange={(e) => {
            const file = e.target.files[0];
            if (!file) return;

            setImg(file);
            setPfpImg(URL.createObjectURL(file)); //preview of the image yet not save
          }}
        />

        {
          show ? <button onClick={sendImage}>Upload</button> : null
        }

        <p>{user.email}</p>
        <button className={styles.logoutBtn} onClick={() => {
          localStorage.removeItem('login');
          navigate('/login');
        }}>Logout</button>
      </div>
    </div >
  </>
}