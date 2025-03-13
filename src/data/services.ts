import { Services } from "@/types/services";
import {
  Code,
  Smartphone,
  Paintbrush,
  Database,
  Search,
  Settings,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Web App Development",
    description:
      "I build fast, scalable, and modern web apps that work smoothly across devices. Whether it’s a startup MVP or a full-scale platform, I’ve got you covered.",
    action: "/#projects",
    actionText: "Show me what you’ve built",
    bg: "/images/web-dev-bg.jpg",
    icon: Code,
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Need a sleek mobile app? I create high-performance iOS & Android apps using modern frameworks like React Native and Flutter.",
    action: "/#projects",
    actionText: "Let’s check out some apps",
    // bg: "/images/mobile-dev-bg.jpg",
    icon: Smartphone,
  },
  // {
  //   id: 3,
  //   title: "UI/UX Design",
  //   description:
  //     "Great design is more than just looks—it's about usability. I craft intuitive, eye-catching UI/UX that keeps users engaged and happy.",
  //   action: "/#design",
  //   actionText: "Show me some designs",
  //   bg: "/images/ui-ux-bg.jpg",
  //   icon: Paintbrush,
  // },
  {
    id: 3,
    title: "Backend Development",
    description:
      "From APIs to databases, I build secure, efficient backends that power modern applications. Scalable, reliable, and built to last.",
    action: "/projects",
    actionText: "See how it all runs",
    bg: "/images/backend-bg.jpg",
    icon: Database,
  },
  {
    id: 4,
    title: "SEO & Performance",
    description:
      "Your website deserves to be seen! I optimize speed, accessibility, and search rankings to make sure your site performs at its best.",
    action: "/#seo",
    actionText: "Let’s get my site noticed",
    // bg: "/images/seo-bg.jpg",
    icon: Search,
  },
  {
    id: 5,
    title: "Tech Consulting",
    description:
      "Not sure what tech stack to use? Need guidance on your project? I offer expert advice to help you make the best decisions for your business.",
    action: "https://calendly.com/codewithkin/15-minute-call",
    actionText: "Let’s talk about my project",
    //bg: "/images/consulting-bg.jpg",
    icon: Settings,
  },
] as Services;
