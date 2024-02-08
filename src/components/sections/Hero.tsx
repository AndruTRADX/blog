import { BookOpenIcon, FireIcon } from "@heroicons/react/24/outline";
import HeroBlogPostCard from "../cards/HeroBlogPostCard";

const Hero = () => {
  return (
    <section className="flex flex-1 w-full main-page-section gap-8">
      <div className="figure-hero bg-primary hidden justify-center items-center gap-2 md:flex">
        <BookOpenIcon className="w-20 h-20 text-light-1" />
        <h2 className="text-light-1 font-medium text-4xl">My blog</h2>
      </div>
      <div className="flex justify-center w-full items-center flex-col md:flex-[0.5] gap-8">
        <h2 className="text-gray-1 font-medium text-center text-2xl md:mt-20 flex items-center gap-2">
          Explore the hottest topics
          <FireIcon className="w-7 h-7 text-primary hidden sm:block" />
        </h2>

        <HeroBlogPostCard
          category="Games"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          date="02-04-2023"
          link=""
        />
        <HeroBlogPostCard
          category="Games"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          date="02-04-2023"
          link=""
        />
        <HeroBlogPostCard
          category="Games"
          title="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          date="02-04-2023"
          link=""
        />
      </div>
    </section>
  );
};

export default Hero;
