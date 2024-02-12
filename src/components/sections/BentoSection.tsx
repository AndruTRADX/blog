import { blogEntries } from "@/constants/hero";
import { SparklesIcon } from "@heroicons/react/24/outline";
import EntryCard from "../cards/EntryCard";

const BentoSection = () => {
  return (
    <section className="main-page-section flex flex-col">
      <h2 className="text-icon-tile-md mb-8">
        Featured Blogs
        <SparklesIcon className="icon-def" />
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-start grid-cols-1 w-full gap-8">
        {blogEntries.map((entry, index) => (
          <EntryCard entry={entry} key={`bento-child-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default BentoSection;
