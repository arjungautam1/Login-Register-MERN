import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="addUser">
      <h3> Add New User</h3>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            autoComplete="off"
            placeholder="Enter your Name"
          />
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
            placeholder="Enter Password"
          />

          <button type="button" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already Have and Account ?</p>
        <Link to="/login" type="button" className="btn btn-primary">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Signup;
