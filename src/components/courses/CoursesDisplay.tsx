import { courseEntries } from "@/constants/hero";
import { BookOpenIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import HeroBlogPostCard from "../cards/HeroBlogPostCard";
import EntryCard from "../cards/EntryCard";
import {
  courseEntriesCategory,
  courseEntriesCategoryFeatured,
} from "@/constants/coursePage";
import CoursesTopics from "../sections/CoursesTopics";

const CoursesDisplay = () => {
  return (
    <section className="main-page-section">
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 gap-y-12 mt-2 items-start">
        <div className="flex flex-col gap-y-4 col-span-2 row-span-1">
          <h3 className="text-icon-title">
            Latest courses from our selection
            <BookOpenIcon className="icon-def" />
          </h3>
          <form className="relative">
            <input
              className="search-input"
              placeholder="What do you want to learn?"
            />
            <MagnifyingGlassIcon className="icon-search-input" />
          </form>
          <CoursesTopics />
        </div>
        <div className="hidden col-start-3 col-end-4 row-span-2 md:block">
          <h3 className="header-xl">Featured courses</h3>
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
          <EntryCard entry={courseEntriesCategoryFeatured} />
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
