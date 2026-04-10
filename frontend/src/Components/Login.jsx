import React, { useEffect, useState } from "react";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [logged, setUser] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4200/login", {
        method: "post",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        credentials:'include'
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        setUser(data.user.fullname);
        alert(data.message)
        navigate('/');
      }
      else { alert(data.message) }
    }
    catch (err) {
      console.log("Error");
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Login</h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};