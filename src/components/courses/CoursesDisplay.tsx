import { courseEntries } from "@/constants/hero";
import { BookOpenIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import HeroBlogPostCard from "../cards/HeroBlogPostCard";
import EntryCard from "../cards/EntryCard";
import {
  courseEntriesCategory,
  courseEntriesCategoryFeatured,
} from "@/constants/coursePage";

const CoursesDisplay = () => {
  return (
    <section className="main-page-section">
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-2 items-start">
        <div className="flex flex-col gap-y-4 col-span-2 row-span-1">
          <h3 className="flex items-center gap-2 text-gray-1 font-medium text-xl">
            Latest courses from our selection
            <BookOpenIcon className="w-6 h-6 text-primary" />
          </h3>
          <form className="relative">
            <input
              className="bg-light-1 pl-10 pr-3 py-2.5 rounded-3xl focus:outline-primary w-full border border-light-3 text-gray-1"
              placeholder="What do you want to learn?"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-primary absolute left-3 top-3" />
          </form>
        </div>
        <div className="hidden col-start-3 col-end-4 row-span-2 md:block">
          <h3 className="text-gray-1 font-medium text-xl">Featured courses</h3>
          <div className="flex flex-col gap-y-6 mt-4 ">
            {courseEntries.map((entry, index) => (
              <HeroBlogPostCard
                category={entry.author}
                title={entry.title}
                date={entry.date}
                link={"/courses/random"}
                key={`Blog-post-card-category-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="col-start-1 col-end-3 row-span-1">
          <EntryCard
            entry={courseEntriesCategoryFeatured}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 col-start-1 col-end-4 items-start">
          {courseEntriesCategory.map((entry, index) => (
            <EntryCard
              entry={entry}
              key={`Blog-entry-card-category-${index}`}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default CoursesDisplay;
