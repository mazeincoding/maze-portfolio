"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InfoIcon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  tags: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "StandSync",
      description:
        "AI-powered app that automatically starts and stops the timer as you enter or exit a handstand using machine learning and a camera.",
      logo: "/images/standsync-logo.png",
      link: "https://standsync.com",
      tags: [
        "Machine Learning",
        "Frontend",
        "Backend",
        "Authentication",
        "Database",
      ],
    },
    {
      title: "PromptsLabs",
      description:
        "A library of prompts to test LLMs on their reasoning so you don't have to find the prompts when a new model comes out.",
      logo: "/images/prompts-labs-logo.png",
      link: "https://promptslabs.com",
      tags: ["Frontend", "Backend", "Database"],
    },
    {
      title: "VoxScribe AI",
      description:
        "A tool that can transcribe audio into beautifully formatted text.",
      logo: "/images/voxscribe-logo.png",
      link: "https://voxscribe-ai.vercel.app",
      tags: ["Frontend", "Backend", "Authentication", "Database"],
    },
    {
      title: "I have a domain problem",
      description:
        "Confess your domain buying addiction and join others in acknowledging the problem.",
      logo: "/images/ihaveadomainproblem-logo.png",
      link: "https://ihaveadomainproblem.com",
      tags: ["Real-time", "Frontend", "Database"],
    },
  ];
  return (
    <section className="flex flex-col gap-8 items-center mt-40 px-12">
      <h2 className="text-4xl font-bold text-primary space-y-4">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      <p className="text-left w-full max-w-2xl text-muted-foreground flex space-x-2">
        <InfoIcon className="w-4 h-4 flex-shrink-0 mt-1" />
        <span>
          Currently lead dev on a large-scale web-based sports game (details
          under NDA)
        </span>
      </p>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <Card className="border border-primary/15 w-full max-w-2xl">
      <CardHeader className="gap-2">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full"
            src={project.logo}
            alt={project.title}
            width={48}
            height={48}
          />
          <Link href={project.link} className="hover:underline">
            <CardTitle className="text-2xl">{project.title}</CardTitle>
          </Link>
        </div>
        <CardDescription className="text-lg">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        <Button className="px-8" onClick={() => router.push(project.link)}>
          Visit
        </Button>
      </CardFooter>
    </Card>
  );
}
