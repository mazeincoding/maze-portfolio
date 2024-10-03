"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useScrollToSection from "@/hooks/use-scroll-to-section";

const skills = [
  "Frontend",
  "Backend",
  "AI Integration",
  "Rapid Prototyping",
  "Problem Solving",
];

const approach_steps = [
  "Identifying the root cause",
  "Exploring alternative solutions",
  "Leveraging AI as a pair-programmer",
  "Implementing solution",
];

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function AboutPage() {
  const { scrollToSection } = useScrollToSection();

  return (
    <div
      className="container mx-auto px-12 py-8 sm:py-16 max-w-3xl space-y-24"
      id="about-section"
    >
      <ProfileSection scrollToSection={scrollToSection} />
      <Section title="My Journey">
        <Paragraph>
          I'm a self-taught full-stack developer with a passion for creating
          innovative solutions. My journey began with pure curiosity, leading me
          to master everything from basic HTML to modern web development.
        </Paragraph>
        <Paragraph>
          Being homeschooled gave me the freedom to dive into coding at a young
          age and dedicate countless hours to it.
        </Paragraph>
      </Section>
      <Section title="My Approach">
        <Paragraph>
          I believe in understanding the core of every problem. My process
          involves:
        </Paragraph>
        <ul className="list-disc list-inside text-base text-muted-foreground space-y-1">
          {approach_steps.map((step) => (
            <li key={step} className="text-lg">
              {step}
            </li>
          ))}
        </ul>
        <Paragraph>
          This approach, combined with my deep understanding of both legacy and
          modern technologies, allows me to create robust, efficient solutions.
        </Paragraph>
      </Section>
      <Section title="Beyond Coding">
        <Paragraph>
          When I'm not writing code on a keyboard, you'll find me doing
          calisthenics. Working out keeps me sharp, focused, and fresh for the
          next coding challenge.
        </Paragraph>
        <Paragraph>
          I'm always exploring new technologies and contributing to the dev
          community. Yesterday it was Rust, today it's Go. Who knows what
          tomorrow will bring? That's the excitement that drives me.
        </Paragraph>
      </Section>
    </div>
  );
}

function ProfileSection({
  scrollToSection,
}: {
  scrollToSection: (section: string) => void;
}) {
  return (
    <section className="flex flex-col sm:flex-row sm:items-center items-center gap-8">
      <Image
        src="/images/me-working.jpg"
        alt="Maze coding"
        width={180}
        height={180}
        className="rounded-full h-fit w-32 sm:w-44 sm:h-44"
        priority={true}
      />
      <div className="flex flex-col items-center sm:items-start gap-4 max-w-lg">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary">Maze</h1>
          <p className="text-base sm:text-xl text-muted-foreground">
            Full-stack Web Developer
          </p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-muted-foreground">{children}</p>;
}
