import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../model/user.js";
import { response } from "express";

export const signupUser = async (req, res) => {
  try {
    //const salt= await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ msg: "Signup Successfully" });
  } catch (error) {
    return res.status(500).json({ msg: "Error While Signup The User" });
  }
};

export const loginUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({ msg: "Username does not match" });
  }
  try {
    let match = await bcrypt.compare(req.user.password, user.password);
    if (match) {
    } else {
      return res.status(400).json({ msg: "Password does not match" });
    }
  } catch (error) {}
};
