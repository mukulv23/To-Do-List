import React, { useState } from "react";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await fetch("http://localhost:4200/signup", {
        method: "POST",
        body: JSON.stringify({ fullname: formData.name, email: formData.email, password: formData.password }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()
      if (data) {
        console.log(data);
        console.log(formData)
        document.cookie = `token = ${data.token}`
        alert(data.message);
        navigate('/login');
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1 className={styles.title}>Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </div>
  );
}