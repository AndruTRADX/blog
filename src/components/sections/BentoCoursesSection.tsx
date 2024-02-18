import { courseEntries } from "@/constants/hero";
import React from "react";
import EntryCard from "../cards/EntryCard";
import {
  ArrowUpRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const BentoCoursesSection = () => {
  return (
    <section className="main-page-section flex flex-col">
      <div className="flex w-full justify-between">
        <h2 className="text-icon-tile-md mb-8">
          Featured Courses
          <RocketLaunchIcon className="icon-def" />
        </h2>
        <Link
          href="/courses"
          className="text-primary flex items-center gap-2 text-sm mb-8 hover:text-primary-hover"
        >
          See more <ArrowUpRightIcon className="icon-text-primary w-3 h-3" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-start grid-cols-1 w-full gap-8">
        {courseEntries.map((entry, index) => (
          <EntryCard entry={entry} key={`bento-child-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default BentoCoursesSection;
