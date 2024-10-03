"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import useScrollToSection from "@/hooks/use-scroll-to-section";
import { use_sidebar_store } from "@/store/sidebar";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Home, Code, Briefcase, Mail, User } from "lucide-react";

interface Link {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const pathname = usePathname();
  const { scrollToSection } = useScrollToSection();
  const { is_open, close } = use_sidebar_store();

  const links: Link[] = [
    { href: "hero-section", label: "Home", icon: <Home size={18} /> },
    { href: "skills-section", label: "Skills", icon: <Code size={18} /> },
    {
      href: "projects-section",
      label: "Projects",
      icon: <Briefcase size={18} />,
    },
    { href: "contact-section", label: "Contact", icon: <Mail size={18} /> },
    { href: "about-section", label: "About", icon: <User size={18} /> },
  ];

  const handle_click = (href: string) => {
    scrollToSection(href);
    close();
  };

  const nav_content = (
    <nav className="p-4">
      {links.map((link) => (
        <Button
          key={link.href}
          onClick={() => handle_click(link.href)}
          className="w-full justify-start text-left px-4 py-2"
          variant="ghost"
        >
          {link.icon}
          <span className="ml-2">{link.label}</span>
        </Button>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="w-64 h-[calc(100vh-64px)] bg-background border-r border-border sticky top-16 flex-shrink-0 hidden lg:block">
        {nav_content}
      </aside>

      <Sheet open={is_open} onOpenChange={close}>
        <SheetContent side="left" className="w-64 px-0">
          {nav_content}
        </SheetContent>
      </Sheet>
    </>
  );
}
