import BentoSection from "@/components/sections/BentoSection";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import CoursesTopics from "@/components/sections/CoursesTopics";
import BentoCoursesSection from "@/components/sections/BentoCoursesSection";
import NewsLetter from "@/components/sections/NewsLetter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BentoSection />
      <CoursesTopics />
      <BentoCoursesSection />
      <NewsLetter />
      <Footer />
    </>
  );
}
