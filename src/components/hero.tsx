"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useScrollToSection from "@/hooks/use-scroll-to-section";

export default function Hero() {
  const router = useRouter();
  const { scrollToSection } = useScrollToSection();

  const avatar_content = (
    <Image
      src="/images/selfie.jpg"
      alt="Maze's selfie"
      width={256}
      height={256}
      className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover"
      priority={true}
    />
  );

  const handle_get_in_touch = () => {
    if (window.location.pathname === "/") {
      scrollToSection("contact-section");
    } else {
      router.push("/");
      setTimeout(() => scrollToSection("contact-section"), 100);
    }
  };

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-center bg-background text-foreground w-full max-w-5xl mx-auto gap-16 px-12 py-16 lg:mt-8"
      id="hero-section"
    >
      <div className="flex flex-col gap-6 lg:w-1/2 lg:order-1">
        <div className="flex justify-center lg:hidden">{avatar_content}</div>
        <div className="flex flex-col gap-4 lg:gap-4">
          {/* For large screens */}
          <h1 className="text-3xl sm:text-4xl xl:text-5xl lg:text-[2.4rem] font-normal flex-col gap-2 text-center lg:text-left hidden sm:flex">
            <span>Hello! I'm Maze 👋</span>
            <span className="font-semibold bg-gradient-to-r from-teal-400 to-primary bg-clip-text text-transparent">
              A full-stack web dev
            </span>
          </h1>
          {/* For small screens */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal gap-2 text-center lg:text-left sm:hidden">
            Hello! I'm Maze👋 a{" "}
            <span className="font-semibold text-primary">
              full-stack web developer
            </span>
          </h1>
          <p className="text-base text-muted-foreground max-w-lg text-center lg:text-left">
            I'm 15 years old and I've been coding for 3 years. I'm a full-stack
            web developer who loves to solve problems and turn ideas into
            reality.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <Button
              size="lg"
              className="rounded-2xl space-x-2 flex"
              onClick={handle_get_in_touch}
            >
              <span>Get in touch</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex justify-center lg:justify-start lg:order-2">
        {avatar_content}
      </div>
    </section>
  );
}
