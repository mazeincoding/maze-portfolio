export interface TTechCircle {
  logo: string;
  url: string;
  display_name: string;
  is_inner: boolean;
  description: string;
}

export const tech_circles: TTechCircle[] = [
  {
    logo: "nextjs.png",
    url: "https://nextjs.org/",
    display_name: "Next.js",
    is_inner: true,
    description:
      "A React framework for building server-side rendered applications.",
  },
  {
    logo: "tailwind.png",
    url: "https://tailwindcss.com/",
    display_name: "Tailwind CSS",
    is_inner: false,
    description:
      "A utility-first CSS framework for rapidly building custom designs.",
  },
  {
    logo: "angular.png",
    url: "https://angular.io/",
    display_name: "Angular",
    is_inner: false,
    description:
      "A TypeScript-based open-source web application framework for building single-page client applications using HTML and TypeScript.",
  },
  {
    logo: "svelte.png",
    url: "https://svelte.dev/",
    display_name: "Svelte",
    is_inner: false,
    description:
      "A compiler-based, reactive JavaScript library for building user interfaces.",
  },
  {
    logo: "supabase.png",
    url: "https://supabase.com/",
    display_name: "Supabase",
    is_inner: false,
    description:
      "An open-source platform for building modern, secure, and scalable web applications.",
  },
  {
    logo: "react.png",
    url: "https://react.dev/",
    display_name: "React",
    is_inner: false,
    description: "A JavaScript library for building user interfaces.",
  },
  {
    logo: "git.png",
    url: "https://git-scm.com/",
    display_name: "Git",
    is_inner: false,
    description:
      "A distributed version control system for tracking changes in source code during software development.",
  },
  {
    logo: "typescript.png",
    url: "https://www.typescriptlang.org/",
    display_name: "TypeScript",
    is_inner: false,
    description:
      "A statically typed superset of JavaScript that compiles to plain JavaScript.",
  },
  {
    logo: "node-js.png",
    url: "https://nodejs.org/",
    display_name: "Node.js",
    is_inner: false,
    description:
      "An open-source, cross-platform runtime environment for executing JavaScript code outside of a browser.",
  },
  {
    logo: "firebase.png",
    url: "https://firebase.google.com/",
    display_name: "Firebase",
    is_inner: false,
    description:
      "A comprehensive platform for building and scaling web and mobile applications.",
  },
  {
    logo: "javascript.png",
    url: "https://www.javascript.com/",
    display_name: "JavaScript",
    is_inner: false,
    description:
      "A programming language used to create interactive effects within web browsers.",
  },
];
