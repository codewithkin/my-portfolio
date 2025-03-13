"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MessageSquare, Layout, PenTool, Code, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const processSteps = [
  {
    title: "Discovery Call",
    icon: <MessageSquare size={28} />,
    description:
      "We kick things off with a deep dive into your idea. We discuss your vision, goals, and any must-have features to ensure we're aligned from day one.",
  },
  {
    title: "Planning & Strategy",
    icon: <Layout size={28} />,
    description:
      "I break your idea down into a solid roadmap. From defining the tech stack to setting realistic milestones, we lay the groundwork for a smooth development process.",
  },
  {
    title: "Design & Prototyping",
    icon: <PenTool size={28} />,
    description:
      "Using modern UI/UX principles, I craft wireframes and high-fidelity designs that bring your concept to life. You'll get a clear preview before we build.",
  },
  {
    title: "Development Sprint",
    icon: <Code size={28} />,
    description:
      "Time to turn designs into reality! I build out the core functionality, ensuring performance, security, and scalability are all on point.",
  },
  {
    title: "Launch & Support",
    icon: <Rocket size={28} />,
    description:
      "Your product goes live! I handle deployment, optimize for speed, and provide ongoing support to ensure everything runs smoothly post-launch.",
  },
];

export default function MyProcess() {
  return (
    <section className="py-12">
      <h3 className="text-center text-4xl font-bold mb-10 text-primary">
        🚀 My Process
      </h3>
      <VerticalTimeline>
        {processSteps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            iconStyle={{ background: "#1e293b", color: "#fff" }}
            icon={step.icon}
            contentStyle={{
              background: "transparent",
              boxShadow: "none",
              padding: 0,
            }}
            contentArrowStyle={{ display: "none" }}
          >
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="text-primary">{step.icon}</div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{step.description}</CardDescription>
              </CardContent>
            </Card>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
