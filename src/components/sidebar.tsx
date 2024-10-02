"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useScrollToSection from "@/hooks/use-scroll-to-section";

interface Link {
  href: string;
  label: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const { scrollToSection } = useScrollToSection();
  const links: Link[] = [
    { href: "hero-section", label: "Home" },
    { href: "skills-section", label: "Skills" },
    { href: "projects-section", label: "Projects" },
    { href: "contact-section", label: "Contact" },
    { href: "about-section", label: "About" },
  ];

  const handle_click = (href: string) => {
    scrollToSection(href);
  };

  return (
    <aside className="w-64 h-[calc(100vh-64px)] bg-background border-r border-border sticky top-16 hidden lg:block flex-shrink-0">
      <nav className="p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handle_click(link.href)}
                className={cn(
                  "block w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === `/#${link.href}`
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
