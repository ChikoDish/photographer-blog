import axios from "axios";
import React, { useState } from "react";
import { registerUri } from "../utils/apis";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    axios.post(registerUri, { email, password }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="register">
      <h1>Login</h1>
      <form onSubmit={register}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="button">Register</button>
      </form>
    </div>
  );
};

export default Register;
