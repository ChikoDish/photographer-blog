import mongoose from "mongoose";

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
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
    resetPasswordLink: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
