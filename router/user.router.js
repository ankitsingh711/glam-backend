const express = require("express");
const UserRouter = express.Router();
const mongoose = require("mongoose");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");


UserRouter.post("/signup", async (req, res) => {
  const {name, email, password} = req.body;
  try {
    bcrypt.hash(password, 6, async (err, secured) => {
      if (err) {
        console.log(err);
      } else {
        const user = new UserModel({ name, email, password: secured });
        await user.save();
        res.send("User Registered Successfully");
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Error while signup");
  }
});

UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  try {
    if (user) {
      bcrypt.compare(password, user.password, (err, pass) => {
        if (pass) {
          jwt.sign({ email }, process.env.Key, (err, token) => {
            if (err) {
              console.log(err);
            } else {
              res.send({"Message:":"Login Success", "token":token});
            }
          });
        } else {
          console.log(err);
          res.send("Invalid Credentials");
        }
      });
    } else {
      res.send("User not found");
    }
  } catch (error) {
    console.log(error);
    res.send("Error while logging in");
  }
});

module.exports = { UserRouter };
