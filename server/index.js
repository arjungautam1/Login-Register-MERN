import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import employee from "./model/employee.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/employee")
  .then(() => {
    console.log("DB Connected Successfully.");
  })
  .catch((error) => console.log(error));

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   employee.findOne({ email: email }).then((user) => {
//     if (user) {
//       if (user.password === password) {
//         res.json("Success");
//       }
//       res.json("The password is incorrect.");
//     } else {
//       res.json("No record exist.");
//     }
//   });
// });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  employee
    .findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The password is incorrect.");
        }
      } else {
        res.json("No record exists.");
      }
    })
    .catch((error) => {
      console.error("Error during login:", error);
      res.status(500).json("An error occurred during login.");
    });
});

app.post("/register", (req, res) => {
  employee
    .create(req.body)
    .then(res.json("User Created Successfully."))
    .catch((error) => res.json(error));
});

app.listen(3001, () => {
  console.log(`Server is running `);
});
