"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";

const skills = ["React", "Next.js", "TypeScript", "Problem Solver"];

export default function About() {
  const router = useRouter();

  return (
    <section className="flex justify-center bg-background text-foreground w-full max-w-2xl mx-auto px-4 py-16">
      <Card className="w-full max-w-3xl">
        <CardHeader className="flex flex-row items-center gap-6">
          <Image
            src="/images/me-working.jpg"
            alt="Maze coding"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div className="text-left">
            <CardTitle className="text-2xl font-bold text-primary">
              Maze
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Full-stack Web Developer
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            When I'm not coding, you'll find me working on my handstand or
            calisthenics.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
          <Button
            size="sm"
            className="mt-4"
            onClick={() => router.push("#contact-section")}
          >
            Connect with me
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
