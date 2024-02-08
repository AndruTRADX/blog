import { Model, models, model } from "mongoose";
import { Document, Schema } from "mongoose";

interface EntryDocument extends Document {
  id: string;
  type: "course" | "blog" | string;
  title: string;
  content: string;
  date: Date;
  topics: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
}

const entrySchema = new Schema<EntryDocument, {}>({
  type: { type: String, enum: ["course", "blog"], default: "blog" },
  title: { type: String, required: true },
  content: {},
  date: { type: Date, required: true, default: Date.now },
  topics: { type: [Schema.Types.ObjectId], required: true, ref: "User" },
  author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

const EntryModel = models.Entry || model("Entry", entrySchema);
export default EntryModel as Model<EntryDocument, {}>;
