export const metadata = {
    title: "Blog | Code with Kin",
    description: "Tech insights, coding tips, and lessons from my journey as a developer. Stay tuned for valuable content!",
    keywords: ["developer blog", "coding tips", "software engineering", "tech insights"],
    openGraph: {
      title: "Blog | Code with Kin",
      description: "Read my thoughts on web development, coding best practices, and the tech industry.",
      url: "https://codewithkin.space/blog",
      images: [
        {
          url: "https://codewithkin.space/og/blog.png",
          width: 1200,
          height: 630,
          alt: "Blog - Code with Kin",
        },
      ],
      type: "website",
    },
  };
  
  export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }
  