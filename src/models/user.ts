import mongoose from "mongoose";
import { Schema } from "mongoose";

interface UserDocument {
  name: string;
  username: string;
  password: string;
  image: string;
  email: string;
  role: "user" | "moderator";
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "please write your name"],
  },
  username: {
    type: String,
    required: [true, "please provide your username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "please provide a valid your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide your password"],
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["user", "moderator"],
    default: "user",
  },
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;
