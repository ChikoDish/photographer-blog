import axios from "axios";
import React, { useState } from "react";
import { loginUri } from "../utils/apis";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post(loginUri, { email, password, userType: "Member" })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
