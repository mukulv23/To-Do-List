import React, { useState } from "react";
import styles from "../styles/auth.module.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Login successful!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.form} onSubmit={handleSubmit}>
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

        <button>Login</button>
      </div>
    </div>
  );
};