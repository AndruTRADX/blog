import { blogCategories } from "@/constants/categories";
import { TagIcon } from "@heroicons/react/24/outline";
import React from "react";

const Categories = () => {
  return (
    <section className="main-page-section flex flex-col gap-4">
      <h2 className="text-icon-tile-md">
        Blog Topics
        <TagIcon className="icon-def" />
      </h2>
      <p className="text-gray-2">
        Dive into a sea of topics currently being explored!
      </p>
      <div className="flex items-center overflow-x-auto py-4 gap-4">
        {blogCategories.map((blogCategory, index) => (
          <div
            key={`blog-category-${blogCategory.name}-${index}`}
            className="flex items-center gap-2 flex-shrink-0 bg-light-2 hover:bg-light-3 transition-colors border border-gray-3 rounded-2xl px-4 py-2.5 cursor-pointer"
          >
            <span
              className={`w-3 h-3 rounded-full block ${blogCategory.color}`}
            />
            <p className="text-gray-1 font-medium">{blogCategory.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
