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
import useScrollToSection from "@/hooks/use-scroll-to-section";

const tags = ["Frontend", "Backend"];

export default function About() {
  const { scrollToSection } = useScrollToSection();

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
            {tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <Button
            size="sm"
            className="mt-4"
            onClick={() => scrollToSection("contact-section")}
          >
            Connect with me
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
