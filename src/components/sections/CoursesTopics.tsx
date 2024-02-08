import { coursesCategories } from "@/constants/categories";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import React from "react";

const CoursesTopics = () => {
  return (
    <section className="main-page-section flex flex-col gap-4">
      <h2 className="flex items-center gap-2 text-2xl font-medium text-gray-1">
        Course Topics
        <BookOpenIcon className="w-6 h-6 text-primary" />
      </h2>
      <p className="text-gray-2">
        Embark on a journey through cutting-edge course topics that will ignite
        your curiosity and boost your skills!
      </p>
      <div className="flex items-center overflow-x-auto py-4 gap-4">
        {coursesCategories.map((courseTopic, index) => (
          <div
            key={`blog-category-${courseTopic.name}-${index}`}
            className="flex items-center gap-2 flex-shrink-0 bg-light-2 hover:bg-light-3 transition-colors border border-gray-3 rounded-2xl px-4 py-2.5 cursor-pointer"
          >
            <span
              className={`w-3 h-3 rounded-full block ${courseTopic.color}`}
            />
            <p className="text-gray-1 font-medium">{courseTopic.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesTopics;
