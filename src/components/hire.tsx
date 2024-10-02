"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, Mail, Check } from "lucide-react";

type PricingOption = {
  type: "fixed" | "hourly";
  amount: number;
  unit?: string;
};

type Service = {
  title: string;
  description: string;
  pricing: PricingOption[];
  offers: string[];
};

export default function Hire() {
  const [show_all, set_show_all] = useState(false);

  const services: Service[] = [
    {
      title: "Code Improvement Package",
      description:
        "Improve your existing codebase: refactoring, optimization, and bug fixes.",
      pricing: [{ type: "hourly", amount: 30 }],
      offers: ["Code refactoring", "Performance optimization", "Bug fixing"],
    },
    {
      title: "Feature Development",
      description:
        "Add new functionality to your app, from simple features to custom components.",
      pricing: [
        { type: "hourly", amount: 40 },
        { type: "fixed", amount: 100, unit: "per feature" },
      ],
      offers: [
        "Custom features",
        "Reusable components",
        "Third-party integrations",
      ],
    },
    {
      title: "API and Integration Services",
      description: "Connect your app to external services and APIs.",
      pricing: [
        { type: "hourly", amount: 30 },
        { type: "fixed", amount: 50, unit: "per integration" },
      ],
      offers: [
        "API integration",
        "Third-party service connection",
        "Data synchronization",
      ],
    },
    {
      title: "UI/UX Improvements",
      description:
        "Enhance your app's look and feel, ensure it works across all browsers.",
      pricing: [
        { type: "hourly", amount: 25 },
        { type: "fixed", amount: 50, unit: "per tweak" },
      ],
      offers: ["UI tweaks", "Cross-browser testing", "Responsive design fixes"],
    },
    {
      title: "SEO and Performance Optimization",
      description: "Boost your site's search engine ranking and loading speed.",
      pricing: [
        { type: "hourly", amount: 40 },
        { type: "fixed", amount: 100 },
      ],
      offers: [
        "SEO basics",
        "Performance optimization",
        "Loading speed improvements",
      ],
    },
    {
      title: "Quick Fixes and Support",
      description: "Rapid solutions for small issues and ongoing support.",
      pricing: [
        { type: "hourly", amount: 20 },
        { type: "fixed", amount: 25, unit: "per fix" },
      ],
      offers: [
        "Quick bug fixes",
        "Ongoing support",
        "Small tweaks and adjustments",
      ],
    },
  ];

  const initial_services_count = 3;
  const displayed_services = show_all
    ? services
    : services.slice(0, initial_services_count);

  return (
    <section className="flex flex-col items-center gap-8 mt-32 relative px-12" id="hire-section">
      <h2 className="text-4xl font-bold text-primary space-y-4">Hire me</h2>
      <div className="flex flex-col gap-6 w-full items-center">
        {displayed_services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
        {show_all && (
          <>
            <div className="flex justify-center sticky bottom-6 mt-6 z-50">
              <Button onClick={() => set_show_all(false)}>
                I've seen enough
              </Button>
            </div>
            <div className="bg-gradient-to-t from-background to-transparent h-24 w-full sticky bottom-0"></div>
          </>
        )}
      </div>
      {!show_all && (
        <>
          <div className="absolute bottom-0 bg-gradient-to-t from-background to-transparent pointer-events-none h-60 w-full"></div>
          <Button onClick={() => set_show_all(true)} className="z-10">
            Show more services
          </Button>
        </>
      )}
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [selected_option, set_selected_option] = useState<PricingOption>(
    service.pricing[0]
  );

  return (
    <Card className="border border-primary/15 w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{service.title}</CardTitle>
        <CardDescription className="text-base">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <h3 className="text-3xl font-bold flex items-baseline">
          ${selected_option.amount}
          {selected_option.type === "hourly" && (
            <span className="font-normal text-muted-foreground text-lg ml-1">
              / hour
            </span>
          )}
          {selected_option.unit &&
            selected_option.type !== "hourly" &&
            ` ${selected_option.unit}`}
        </h3>
        {service.pricing.length > 1 && (
          <div className="flex gap-2">
            {service.pricing.map((option) => (
              <Button
                size="sm"
                className={cn(
                  "px-4",
                  selected_option.type === option.type
                    ? "bg-primary hover:bg-primary border border-transparent shadow-none"
                    : "bg-background border border-primary/25 hover:bg-primary/15 text-primary shadow-none"
                )}
                key={option.type}
                onClick={() => set_selected_option(option)}
              >
                {option.type}
              </Button>
            ))}
          </div>
        )}
        <div className="space-y-2">
          {service.offers.map((offer, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-primary" />
              <span>{offer}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button size="lg">
          <CheckCircle2Icon className="w-4 h-4 mr-2" />
          <span>Hire me</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
