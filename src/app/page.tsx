import Hero from "@/components/hero";
import { Header } from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Hire from "@/components/hire";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="flex flex-col relative ">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Hire />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
