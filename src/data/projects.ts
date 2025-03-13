import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Aurix",
    description:
      "A super handy job scraper that pulls gigs from Upwork and Reddit, all in one sleek UI. Save jobs for later or let the auto-reachout feature do the heavy lifting—so you can focus on landing clients instead of hunting for them.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS"],
    imageUrl: "/images/projects/aurix.png",
    liveUrl: "https://aurix-app.vercel.app/",
    badge: "Web App",
  },
  {
    id: 2,
    name: "Quantaum Forms",
    description:
      "Imagine typing one prompt and getting a fully-built form—yeah, that’s Quantaum Forms. AI does the work, generating complete forms in seconds so you can skip the setup and get straight to collecting responses.",
    techStack: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/projects/quantumforms.png",
    liveUrl: "https://quantaumforms.vercel.app/",
    badge: "Web App",
  },
  {
    id: 3,
    name: "SaaS Foundr",
    description:
      "A space where startup founders connect, swap ideas, and track progress on their apps. Whether you're launching, scaling, or just figuring things out, SaaS Foundr makes sure you're not doing it alone.",
    techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
    imageUrl: "/images/projects/saasfoundr.png",
    liveUrl: "https://saasfoundr.vercel.app/",
    badge: "Landing Page",
  },
  {
    id: 4,
    name: "AISEOgen",
    description:
      "SEO is a headache—AISEOgen fixes that. It automates keyword research, metadata, and content optimization, so you can rank higher without spending hours tweaking your site. Just click, generate, and go.",
    techStack: ["Next.js", "Python", "Google Trends API"],
    imageUrl: "/images/projects/aiseogen.png",
    liveUrl: "https://aiseogen.com/",
    badge: "SaaS Web App",
  },
];
