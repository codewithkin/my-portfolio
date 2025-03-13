export const metadata = {
    title: "Projects | Code with Kin",
    description: "Explore my latest web apps, SaaS projects, and client work. See what I've built and how I can bring ideas to life.",
    keywords: ["web development", "SaaS projects", "React", "Next.js", "portfolio"],
    openGraph: {
      title: "Projects | Code with Kin",
      description: "Check out my latest projects, from SaaS apps to landing pages.",
      url: "https://codewithkin.space/projects",
      images: [
        {
          url: "https://codewithkin.space/og/projects.png",
          width: 1200,
          height: 630,
          alt: "Recent Projects - Code with Kin",
        },
      ],
      type: "website",
    },
  };
  
  export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  