import { blogEntries } from "@/constants/hero";
import { ArrowUpRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import EntryCard from "../cards/EntryCard";
import Link from "next/link";

const BentoSection = () => {
  return (
    <section className="main-page-section flex flex-col">
      <div className="flex w-full justify-between">
        <h2 className="text-icon-tile-md mb-8">
          Featured Blogs
          <SparklesIcon className="icon-def" />
        </h2>
        <Link href="/blogs" className="text-primary flex items-center gap-1 text-sm mb-8 hover:text-primary-hover">
          See more <ArrowUpRightIcon className="icon-text-primary w-3 h-3" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-start grid-cols-1 w-full gap-8">
        {blogEntries.map((entry, index) => (
          <EntryCard entry={entry} key={`bento-child-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default BentoSection;
