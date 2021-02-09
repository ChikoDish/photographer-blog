import exports from "express";
const router = express.Router();
import Blog from "../models/blog.js";

//get all blogs

router.get("/api/blogs", (req, res) => {
  const blog = Blog.find({}).exec();
});
