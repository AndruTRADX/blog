import { coursesCategories } from "@/constants/categories";
import CardOverflow from "../cards/CardOverflow";

const CoursesTopics = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center overflow-x-auto py-4 gap-2">
        {coursesCategories.map((courseTopic, index) => (
          <CardOverflow entryCategory={courseTopic} key={`course-category-${courseTopic.name}-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default CoursesTopics;
