export type Project = {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveUrl: string;
  badge: "Web App" | "Landing Page" | "SaaS Web App" | "Mobile App";
};
