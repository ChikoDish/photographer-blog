import express from "express";
import Bcrypt from "bcryptjs";
const router = express.Router();

import User from "../models/user.js";

//register user
router.post("/api/register", async (req, res) => {
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
});

export default router;
