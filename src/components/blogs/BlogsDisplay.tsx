import { blogEntries } from "@/constants/hero";
import { BookmarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import EntryCard from "../cards/EntryCard";
import HeroBlogPostCard from "../cards/HeroBlogPostCard";
import {
  blogEntriesCategory,
  blogEntriesCategoryFeatured,
} from "@/constants/categoryPage";

const BlogDisplay = () => {
  return (
    <section className="main-page-section">
      <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mt-2 items-start">
        <div className="flex flex-col gap-y-4 col-span-2 row-span-1">
          <h3 className="flex items-center gap-2 text-gray-1 font-medium text-xl">
            Latest entries from our selection
            <BookmarkIcon className="w-6 h-6 text-primary" />
          </h3>
          <form className="relative">
            <input
              className="bg-light-1 pl-10 pr-3 py-2.5 rounded-3xl focus:outline-primary w-full border border-light-3 text-gray-1"
              placeholder="What do you want to read?"
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-primary absolute left-3 top-3" />
          </form>
        </div>
        <div className="hidden md:block col-start-3 col-end-4 row-span-2">
          <h3 className="text-gray-1 font-medium text-xl">Featured post</h3>
          <div className="flex flex-col gap-y-6 mt-4">
            {blogEntries.map((entry, index) => (
              <HeroBlogPostCard
                category={entry.author}
                title={entry.title}
                date={entry.date}
                link={"/blogs/random"}
                key={`Blog-post-card-category-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="col-start-1 col-end-3 row-span-1">
          <EntryCard entry={blogEntriesCategoryFeatured} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 col-start-1 col-end-4 items-start">
          {blogEntriesCategory.map((entry, index) => (
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

export default BlogDisplay;
