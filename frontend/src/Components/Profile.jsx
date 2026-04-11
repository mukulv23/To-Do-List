import React, { useEffect, useState } from 'react'
import styles from '../styles/profile.module.css'
import { useNavigate } from 'react-router-dom';
export const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("login")))
  }, [])

  const navigate = useNavigate();
  if (user == null)
    return <p>Loading....</p>

  return <>
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h2>Hi {user.name}!</h2>
        <div className={styles.circle}>
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