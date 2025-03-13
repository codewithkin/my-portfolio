import { Project } from "@/types/project";

export const projects: Project[] = [
    {
      id: 1,
      name: "Aurix",
      description:
        "A sleek and secure cryptocurrency wallet designed for seamless transactions and asset management.",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
      imageUrl: "/images/projects/aurix-preview.png",
      liveUrl: "https://aurix-app.vercel.app/",
      badge: "Web App",
    },
    {
      id: 2,
      name: "Quantaum Forms",
      description:
        "A powerful, no-code form builder that lets you create and manage custom forms effortlessly.",
      techStack: ["React", "Node.js", "MongoDB"],
      imageUrl: "/images/projects/quantaumforms-preview.png",
      liveUrl: "https://quantaumforms.vercel.app/",
      badge: "Web App",
    },
    {
      id: 3,
      name: "SaaS Foundr",
      description:
        "A beautifully designed landing page template optimized for SaaS startups to showcase their products.",
      techStack: ["Next.js", "TailwindCSS", "Framer Motion"],
      imageUrl: "/images/projects/saasfoundr-preview.png",
      liveUrl: "https://saasfoundr.vercel.app/",
      badge: "Landing Page",
    },
    {
      id: 4,
      name: "AISEOgen",
      description:
        "An AI-powered SEO content generator that automates keyword research and metadata optimization.",
      techStack: ["Next.js", "Python", "Google Trends API"],
      imageUrl: "/images/projects/aiseogen-preview.png",
      liveUrl: "https://aiseogen.com/",
      badge: "SaaS Web App",
    },
  ];
  