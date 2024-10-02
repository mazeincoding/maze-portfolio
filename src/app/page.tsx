import Hero from "@/components/hero";
import { Header } from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import About from "@/components/about";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        <div className="flex flex-col relative">
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
