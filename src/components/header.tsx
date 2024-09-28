"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import useScrollToSection from "@/hooks/use-scroll-to-section";

export function Header() {
  const { scrollToSection } = useScrollToSection();

  return (
    <header className="w-full border-b flex justify-between items-center p-4 sticky top-0 z-50 backdrop-blur">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <Button onClick={() => scrollToSection("contact-section")}>
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
