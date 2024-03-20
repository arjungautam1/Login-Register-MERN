import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  //   const users = {
  //     name: "",
  //     email: "",
  //     password: "",
  //   };

  //   // state to manage user form data
  //   const [user, setUser] = useState(users);

  //   const inputHandler = (e) => {
  //     const { name, value } = e.target;
  //     setUser({ ...user, [name]: value });
  //     console.log(user);
  //   };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .post("http://localhost:3001/register", { name, email, password })
  //       .then(
  //         (result) => toast.success(result.data, { position: "top-right" }),
  //         navigate("/login")
  //       )
  //       .catch((error) => console.log(error));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then(() => {
        // Display success toast
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addUser">
      <h3> Add New User</h3>
      <form onSubmit={handleSubmit} className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
            //     onChange={inputHandler}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="Email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            //     onChange={inputHandler}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Password"
            //     onChange={inputHandler}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-success">
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
