"use client";

import { TechCircles } from "./tech-circles";
import LogoCarousel from "./logo-carousel";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Skills() {
  const router = useRouter();

  return (
    <section
      className="flex flex-col gap-8 items-center py-24 w-full"
      id="skills-section"
    >
      <div className="flex flex-col items-center gap-0 md:gap-32 w-full">
        <h2 className="text-4xl font-bold text-primary space-y-4 w-full text-center">
          Skills
        </h2>
        <div className="hidden md:block">
          <TechCircles />
        </div>
        <div className="block md:hidden w-full mt-10">
          <LogoCarousel />
        </div>
        <Button onClick={() => router.push("/skills")}>View all skills</Button>
      </div>
    </section>
  );
}
