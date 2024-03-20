import React from "react";
import "../signup/signup.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="addUser">
      <h3> Sign In</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Email:</label>
          <input
            type="Email"
            id="email"
            autoComplete="off"
            placeholder="Enter your Email"
          />
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter your Password"
          />
        </div>
      </form>
      <div className="login">
        <Link to="/login" type="button" className="btn btn-primary">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Login;
