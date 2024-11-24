import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import ExperienceV2 from "@/components/ExperienceV2";
import { navItems } from "@/data";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      className="relative bg-gradient-to-b from-black via-black-100 via-[25%] to-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto
    sm:px-10 px-5 scroll-smooth"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <ExperienceV2 />
        <Grid />
        <Contact />
      </div>
    </main>
  );
}
