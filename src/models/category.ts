import { Model, models, model } from "mongoose";
import { Document, Schema } from "mongoose";

interface CategoryDocument extends Document {
  id: string;
  category: string;
  bgColor: string;
}

const categorySchema = new Schema<CategoryDocument, {}>({
  category: { type: String, required: true },
  bgColor: { type: String, required: true, default: "bg-primary" },
});

const CategoryModel = models.Category || model("Category", categorySchema);
export default CategoryModel as Model<CategoryDocument, {}>;
