import express from "express";
const router = express.Router();

import user from "../controllers/user.js";

router.use("/user", user);
export default router;
