"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { tech_circles } from "./tech-logos";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "next-preload": tech_circles
      .map((circle) => `/images/${circle.logo}`)
      .join(","),
  },
};

export function TechCirclesLg() {
  const outer_circle_radius = 240;
  const circle_size = 100;

  const calculate_position = (index: number) => {
    const angle = (index / (tech_circles.length - 1)) * 2 * Math.PI;
    const x = outer_circle_radius * Math.cos(angle);
    const y = outer_circle_radius * Math.sin(angle);
    return { x, y };
  };

  const inner_circle = tech_circles.find((circle) => circle.is_inner);
  const outer_circles = tech_circles.filter((circle) => !circle.is_inner);

  const bounce_animation = {
    scale: [1, 0.97, 1.03, 0.98, 1],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      times: [0.44, 0.05, 0.14, 0.74],
      repeat: Infinity,
      repeatDelay: 1,
    },
  };

  const hover_card_open_delay = 250;
  const hover_card_close_delay = 0;

  return (
    <div className="relative w-[400px] h-[400px]">
      <HoverCard
        openDelay={hover_card_open_delay}
        closeDelay={hover_card_close_delay}
      >
        <HoverCardTrigger asChild>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56">
            <Link href={inner_circle?.url || "#"} target="_blank">
              <motion.div
                animate={bounce_animation}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <Image
                  src={`/images/${inner_circle?.logo}`}
                  alt={inner_circle?.display_name || ""}
                  width={224}
                  height={224}
                  className={`rounded-full cursor-pointer ${
                    inner_circle?.display_name === "Next.js"
                      ? "invert dark:invert-0"
                      : ""
                  }`}
                  priority={true}
                />
              </motion.div>
            </Link>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-row gap-4 w-[300px]">
          <Image
            src={`/images/${inner_circle?.logo}`}
            alt={inner_circle?.display_name || ""}
            width={35}
            height={35}
            className="rounded-full h-fit"
            priority={true}
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{inner_circle?.display_name}</h3>
            <p>{inner_circle?.description}</p>
          </div>
        </HoverCardContent>
      </HoverCard>
      {outer_circles.map((circle, index) => {
        const { x, y } = calculate_position(index);
        return (
          <HoverCard
            key={index}
            openDelay={hover_card_open_delay}
            closeDelay={hover_card_close_delay}
          >
            <HoverCardTrigger asChild>
              <div
                className="absolute"
                style={{
                  top: `calc(50% + ${y}px - ${circle_size / 2}px)`,
                  left: `calc(50% + ${x}px - ${circle_size / 2}px)`,
                }}
              >
                <Link href={circle.url} target="_blank">
                  <motion.div
                    className={`w-[100px] h-[100px] cursor-pointer ${
                      !circle.logo ? "bg-secondary rounded-full" : ""
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    {circle.logo && (
                      <Image
                        src={`/images/${circle.logo}`}
                        alt={circle.display_name}
                        width={100}
                        height={100}
                        className={`object-cover ${
                          circle.display_name === "Next.js"
                            ? "invert dark:invert-0"
                            : ""
                        }`}
                        priority={true}
                      />
                    )}
                  </motion.div>
                </Link>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="flex flex-row gap-4 w-[300px]">
              <Image
                src={`/images/${circle.logo}`}
                alt={circle.display_name || ""}
                width={35}
                height={35}
                className="rounded-full h-fit"
                priority={true}
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">{circle.display_name}</h3>
                <p>{circle.description}</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        );
      })}
    </div>
  );
}

export function TechCirclesSm() {
  const tech_circle_list = (
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none">
      {tech_circles.map((circle, index) => (
        <li key={index}>
          <Image
            src={`/images/${circle.logo}`}
            alt={circle.display_name}
            width={60}
            height={60}
            priority={true}
            className={`object-cover ${
              circle.display_name === "Next.js" ? "invert dark:invert-0" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-full mt-8 relative overflow-x-hidden">
      <div className="inline-flex flex-nowrap animate-infinite-scroll">
        {tech_circle_list}
        {React.cloneElement(tech_circle_list, { "aria-hidden": "true" })}
        {React.cloneElement(tech_circle_list, { "aria-hidden": "true" })}
        {React.cloneElement(tech_circle_list, { "aria-hidden": "true" })}
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-background/75 to-transparent h-full w-32 z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-background/75 to-transparent h-full w-32 z-10 pointer-events-none"></div>
    </div>
  );
}
