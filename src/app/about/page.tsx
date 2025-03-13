"use client";
import HeadingBadge from "@/components/reusable/HeadingBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Briefcase, Rocket, BrainCircuit, Heart } from "lucide-react";
import Link from "next/link";

function About() {
  return (
    <section className="flex flex-col items-center text-center pb-20">
      {/* Hero Section */}
      <motion.header
        className="header-custom mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <article className="flex flex-col gap-2 items-center">
          <HeadingBadge>About Me</HeadingBadge>
          <h2 className="main-heading text-primary">
            A Developer, a Creator, a Problem-Solver
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Hey, I'm Kin Leon Zinzombe! From my first line of code to building
            full-scale applications, it's been a journey of curiosity,
            problem-solving, and continuous learning.
          </p>
        </article>
      </motion.header>

      {/* Profile Picture Section */}
      <div className="w-40 h-40 rounded-full bg-gray-300 shadow-lg mb-8">
        {/* Insert your image here */}
        {/* Example: <img src="/your-photo.jpg" className="w-full h-full rounded-full object-cover" alt="Kin Leon Zinzombe" /> */}
      </div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

        {/* Timeline Items */}
        {[
          {
            id: "01",
            icon: <Code className="w-8 h-8 text-primary" />,
            title: "How It All Started",
            description:
              "Five years ago, I stumbled upon coding out of pure curiosity. Writing my first 'Hello, World!' sparked a deep fascination with building things from scratch.",
          },
          {
            id: "02",
            icon: <BrainCircuit className="w-8 h-8 text-primary" />,
            title: "First Struggles & Wins",
            description:
              "Debugging errors all night, fighting with JavaScript—it was tough. But building my first real project, a simple to-do app, was a game-changer.",
          },
          {
            id: "03",
            icon: <Briefcase className="w-8 h-8 text-primary" />,
            title: "Breaking Into the Industry",
            description:
              "I started freelancing, landing small gigs, and eventually got my first software engineering role at CST, where I learned to build real-world applications.",
          },
          {
            id: "04",
            icon: <Rocket className="w-8 h-8 text-primary" />,
            title: "Mastering My Craft",
            description:
              "From mobile apps to AI chatbots, I kept refining my skills, focusing on full-stack development and scalable solutions.",
          },
          {
            id: "05",
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Beyond Code",
            description:
              "Outside of coding, I explore new tech, brainstorm ideas, and work on passion projects that push the limits of creativity and innovation.",
          },
        ].map((step, index) => (
          <motion.div
            key={step.id}
            className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-center mb-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <div className="w-1/2 flex flex-col items-center text-center px-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mt-4">
                {step.id}. {step.title}
              </h3>
              <p className="text-slate-700 mt-2">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Card className="w-full max-w-lg bg-muted/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <p className="text-slate-700 text-lg">
              Want to collaborate or just chat about tech? Let's connect! 🚀
            </p>
          </CardContent>
          <CardFooter className="flex flex-col justify-center items-center">
            <Button asChild>
              <Link href="https://calendly.com/codewithkin/15-minute-call">
                Let's talk
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}

export default About;
