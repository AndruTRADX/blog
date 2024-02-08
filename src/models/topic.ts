import { Model, models, model } from "mongoose";
import { Document, Schema } from "mongoose";

interface TopicDocument extends Document {
  id: string;
  topic: string;
  bgColor: string;
}

const topicSchema = new Schema<TopicDocument, {}>({
  topic: { type: String, required: true },
  bgColor: { type: String, required: true, default: "bg-primary" },
});

const topicModel = models.Topic || model("Topic", topicSchema);
export default topicModel as Model<TopicDocument, {}>;
