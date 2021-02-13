import express from "express";
import Bcrypt from "bcryptjs";
const router = express.Router();
import {
  resetPasswordValidator,
  signupValidator,
  forgetPasswordValidaor,
  changePasswordValidator,
} from "../validator/index.js";
import { check, validationResult } from "express-validator";
import User from "../models/user.js";

//register user
router.post("/api/register", signupValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstErrors = errors.errors.map((error) => error.msg);
    return res.status(422).json({ message: firstErrors });
  } else {
    const password = Bcrypt.hashSync(req.body.password, 10);
    try {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (user) {
        res.status(500).json({ message: "User already registered" });
        return;
      } else {
        const newUser = new User(req.body);
        newUser.password = password;
        newUser.userType = "Member";
        newUser.save();
        res.status(200).json({ success: true, message: newUser });
      }
    } catch (error) {
      res.status(200).json({ error: error });
    }
  }
});

//user login
router.post("/api/login", async (req, res) => {
  const { email, password, userType } = req.body;
  try {
    const user = await User.findOne({ email: email }).exec();
    if (!user) {
      res.status(500).json({ success: false, message: "User not exist" });
    } else if (!Bcrypt.compareSync(password, user.password)) {
      res
        .status(500)
        .json({ success: false, message: "Password does not match" });
    } else if (userType !== user.userType) {
      res.status(500).json({ success: false, message: "Invalid user" });
    } else {
      res.status(200).json({ success: true, message: user });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//change Password
router.post(
  "/api/changepassword",
  changePasswordValidator,
  async (req, res) => {
    const { email, lastPass, password } = req.body;
    try {
      const update = { $set: { password: password } };
      const user = await User.findOneAndUpdate({ email: email }, update, {
        new: true,
      }).exec();
      if (user) {
        res.status(200).json({ message: user });
      } else {
        res.status(400).json({ message: "user not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
);

//reset password
router.post("/api/resetpassword", resetPasswordValidator, async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, {
      password: password,
    }).exec();
    if (user) {
      res.status(200).json({ message: "Updated successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
});
export default router;
