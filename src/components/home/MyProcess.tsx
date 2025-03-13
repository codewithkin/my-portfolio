"use client";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MessageSquare, Layout, Code, CheckCircle, Rocket } from 'lucide-react';

const processSteps = [
  { title: "Discovery Call", icon: <MessageSquare />, description: "We discuss your goals, vision, and project scope." },
  { title: "Planning & Strategy", icon: <Layout />, description: "I define the roadmap, tech stack, and timeline." },
  { title: "Design & Prototyping", icon: <Code />, description: "I create wireframes and high-fidelity UI mockups." },
  { title: "Development Sprint", icon: <CheckCircle />, description: "I bring the designs to life and build core features." },
  { title: "Launch & Support", icon: <Rocket />, description: "Your project goes live, and I provide post-launch support." }
];

export default function MyProcess() {
  return (
    <section className="py-10">
      <h3 className="text-center text-4xl font-bold mb-10">🚀 My Process</h3>
      <VerticalTimeline>
        {processSteps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            iconStyle={{ background: '#1e293b', color: '#fff' }}
            icon={step.icon}
            contentStyle={{ background: '#f8fafc', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #1e293b' }}
          >
            <h4 className="text-xl font-semibold">{step.title}</h4>
            <p>{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}