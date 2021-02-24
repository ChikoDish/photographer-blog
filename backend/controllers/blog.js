import exports from "express";
const router = express.Router();
import Blog from "../models/blog.js";

//get all blogs

router.get("/api/blogs", async (req, res) => {
  const blog = Blog.find({}).exec();
});

router.post("/api/addblog", async (req, res) => {
  const { title, body, tags, userId } = req.body;
  try {
    const user = await User.findById(userId);
    if (user) {
      const blog = new Blog(req.body);
      blog.save();
      res.status(200).json(blog);
    } else {
      throw `No user found`;
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
