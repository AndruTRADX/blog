import Navbar from "@/components/Navbar";
import BentoSection from "@/components/sections/BentoSection";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import CoursesTopics from "@/components/sections/CoursesTopics";
import BentoCoursesSection from "@/components/sections/BentoCoursesSection";
import NewsLetter from "@/components/sections/NewsLetter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center bg-light-1">
      <Navbar />
      <Hero />
      <Categories />
      <BentoSection />
      <CoursesTopics />
      <BentoCoursesSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
