import express from "express";
const router = express.Router();

import user from "../controllers/user.js";
import blog from "../controllers/blog.js";

router.use("/user", user);
router.use("/blog", blog);

export default router;
