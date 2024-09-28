import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="w-full border-b flex justify-between items-center p-4 sticky top-0 z-50 backdrop-blur">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 ml-auto">
          <ThemeToggle />
          <Button>Contact</Button>
        </div>
      </div>
    </header>
  );
}
