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
          <h3 className="text-icon-title">
            Latest entries from our selection
            <BookmarkIcon className="icon-def" />
          </h3>
          <form className="relative">
            <input
              className="search-input"
              placeholder="What do you want to read?"
            />
            <MagnifyingGlassIcon className="icon-search-input" />
          </form>
        </div>
        <div className="hidden md:block col-start-3 col-end-4 row-span-2">
          <h3 className="header-xl">Featured post</h3>
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
