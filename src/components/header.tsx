"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export function Header() {
  const { scrollToSection } = useScrollToSection();

  return (
    <header className="w-full h-16 border-b flex justify-between items-center p-4 sticky top-0 z-50 backdrop-blur">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 ml-auto">
          <div>
            <Link
              href="https://github.com/mazeincoding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <FaGithub className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
          <Button onClick={() => scrollToSection("contact-section")}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
