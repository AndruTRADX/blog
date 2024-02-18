import BentoSection from "@/components/sections/BentoSection";
import Hero from "@/components/sections/Hero";
import BentoCoursesSection from "@/components/sections/BentoCoursesSection";
import NewsLetter from "@/components/sections/NewsLetter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoSection />
      <BentoCoursesSection />
      <NewsLetter />
      <Footer />
    </>
  );
}
