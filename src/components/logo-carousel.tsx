"use client";

import Image from "next/image";
import { tech_circles } from "./tech-logos";

export default function LogoCarousel() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
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
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
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
    </div>
  );
}
