export const metadata = {
    title: "About Me | Code with Kin",
    description: "Get to know my journey as a developer, from my first lines of code to building full-scale applications.",
    keywords: ["about me", "software engineer", "developer journey", "Code with Kin"],
    openGraph: {
      title: "About Me | Code with Kin",
      description: "Learn about my journey as a developer and the experiences that shaped my career.",
      url: "https://codewithkin.space/about",
      images: [
        {
          url: "https://codewithkin.space/og/about.png",
          width: 1200,
          height: 630,
          alt: "About Kin - Code with Kin",
        },
      ],
      type: "website",
    },
  };
  
  export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  