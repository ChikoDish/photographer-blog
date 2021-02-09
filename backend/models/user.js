import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    userType: {
      type: String,
      enum: ["Admin", "Member"],
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
