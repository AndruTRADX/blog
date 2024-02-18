import { blogCategories } from "@/constants/categories";
import CardOverflow from "../cards/CardOverflow";

const Categories = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center overflow-x-auto py-4 gap-2">
        {blogCategories.map((blogCategory, index) => (
          <CardOverflow entryCategory={blogCategory} key={`blog-category-${blogCategory.name}-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
