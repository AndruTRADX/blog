import { Model, models, model } from "mongoose";
import { Document, Schema } from "mongoose";

interface UserDocument extends Document {
  name: string;
  username: string;
  image: string;
  email: string;
  role: "user" | "moderator";
}

const userSchema = new Schema<UserDocument, {}>({
  name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["user", "moderator"], default: "user" },
});

const UserModel = models.User || model("User", userSchema);
export default UserModel as Model<UserDocument, {}>;
