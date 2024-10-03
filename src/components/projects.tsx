"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { InfoIcon, AlertCircle, CheckCircle2, Code2Icon } from "lucide-react";

interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  problem: string;
  solution: string;
  tech_stack: string;
  challenge: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "StandSync",
      description:
        "AI-powered app that automatically starts and stops the timer as you enter or exit a handstand using machine learning and a camera.",
      logo: "/images/standsync-logo.png",
      link: "https://standsync.com",
      problem:
        "Starting a timer as you do a handstand is hard. Stopping the timer is even harder.",
      solution:
        "The app uses your phone's camera with AI to detect when you're in a handstand and automatically start and stop the timer.",
      tech_stack:
        "Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Framer Motion, Supabase, ONNX Runtime, Node.js, Nodemailer, Vercel, Zod, Axios",
      challenge:
        "Implementing real-time handstand detection on the client-side with TensorFlow.js",
    },
    {
      title: "PromptsLabs",
      description:
        "A library of prompts to test LLMs on their reasoning so you don't have to find the prompts when a new model comes out.",
      logo: "/images/prompts-labs-logo.png",
      link: "https://promptslabs.com",
      problem:
        "When a new LLM comes out, finding the right prompts to test it on is time-consuming.",
      solution:
        "I built a library of prompts to test LLMs on their reasoning. Find a prompt, copy it and paste it into the LLM.",
      tech_stack:
        "Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Supabase, Lucide, Radix UI, Embla Carousel, React Hook Form, Zod, Next Themes, Vercel Analytics",
      challenge:
        "Designing an intuitive interface for prompt categorization and retrieval",
    },
    {
      title: "VoxScribe AI",
      description:
        "A tool that can transcribe audio into beautifully formatted text.",
      logo: "/images/voxscribe-logo.png",
      link: "https://voxscribe-ai.vercel.app",
      problem:
        "Transcribing audio often comes out as garbage when it comes to readability. It's just a bunch of words.",
      solution:
        "This app will transcribe your audio and use AI to format it into readable text.",
      tech_stack:
        "Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Firebase, Groq SDK, React Hook Form, Zod, Axios, FFmpeg, Framer Motion, Vercel Analytics, React Icons, date-fns, Nodemailer, OpenAI API, React Media Recorder, Embla Carousel, Lucide React, Next Themes",
      challenge:
        "Integrating multiple AI models for transcription and formatting",
    },
    {
      title: "I have a domain problem",
      description:
        "Confess your domain buying addiction and join others in acknowledging the problem. Add your listings to the site and explain domain names.",
      logo: "/images/ihaveadomainproblem-logo.png",
      link: "https://ihaveadomainproblem.com",
      problem: "Buying too many domain names. It's a real problem.",
      solution:
        "This app doesn't magically solve your domain buying addiction, but it does allow you to list your unused domain names and maybe... someone with a domain problem will buy them.",
      tech_stack:
        "Next.js, React, TypeScript, Tailwind CSS, Shadcn UI, Zustand, Framer Motion, Supabase, React Hook Form, Zod, React Icons, Lucide React, Motion Number, Vercel Analytics, Next Themes",
      challenge: "Implementing real-time updates for domain listings",
    },
  ];
  return (
    <section
      className="flex flex-col gap-8 items-center py-24 px-12"
      id="projects-section"
    >
      <h2 className="text-4xl font-bold text-primary space-y-4">Projects</h2>
      <div className="flex flex-col gap-20">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <p className="text-left w-full max-w-2xl text-muted-foreground flex space-x-2">
        <InfoIcon className="w-4 h-4 flex-shrink-0" />
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
    <div className="w-full max-w-2xl space-y-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full"
            src={project.logo}
            alt={project.title}
            width={48}
            height={48}
          />
          <Link href={project.link} className="hover:underline">
            <h2 className="text-2xl font-bold">{project.title}</h2>
          </Link>
        </div>
        <p className="text-lg text-muted-foreground">{project.description}</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Problem:</h3>
            <p>{project.problem}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Solution:</h3>
            <p>{project.solution}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <InfoIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Challenge:</h3>
            <p>{project.challenge}</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Code2Icon className="w-5 h-5 text-green-500 flex-shrink-0" />
          <div className="w-full space-y-2">
            <h3 className="font-semibold text-lg">Tech Stack:</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.split(", ").map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button className="px-8" onClick={() => router.push(project.link)}>
        Visit
      </Button>
    </div>
  );
}
