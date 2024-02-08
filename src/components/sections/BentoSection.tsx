import { blogEntries } from "@/constants/hero";
import { SparklesIcon } from "@heroicons/react/24/outline";
import EntryCard from "../cards/EntryCard";

const BentoSection = () => {
  return (
    <section className="main-page-section flex flex-col">
      <h2 className="flex gap-2 items-center text-2xl font-medium text-gray-1 mb-8">
        Featured Blogs
        <SparklesIcon className="w-6 h-6 text-primary" />
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
