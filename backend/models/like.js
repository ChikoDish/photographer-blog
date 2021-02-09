import mongoose from "mongoose";
const { Schema } = mongoose;

const likeSchema = new Schema(
  {
    blogId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timeStamp: true }
);

const Likes = mongoose.model("Likes", likeSchema);
export default Likes;
