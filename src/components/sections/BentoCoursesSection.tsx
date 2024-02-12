import { courseEntries } from "@/constants/hero";
import React from "react";
import EntryCard from "../cards/EntryCard";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

const BentoCoursesSection = () => {
  return (
    <section className="main-page-section flex flex-col">
      <h2 className="text-icon-tile-md mb-8">
        Featured Courses
        <RocketLaunchIcon className="icon-def" />
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-start grid-cols-1 w-full gap-8">
        {courseEntries.map((entry, index) => (
          <EntryCard entry={entry} key={`bento-child-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default BentoCoursesSection;
