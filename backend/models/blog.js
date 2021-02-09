import mongoose from "mongoose";

const { Schema } = mongoose;
const blogSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    comments: [{ type: ObjectId, ref: "User" }, { type: String }],
    tags: {
      type: Array,
    },
  },
  { timeStamp: true }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
