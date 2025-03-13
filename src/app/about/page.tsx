"use client";
import HeadingBadge from "@/components/reusable/HeadingBadge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <motion.header 
        className="header-custom mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <article className="flex flex-col gap-2 items-center">
          <HeadingBadge>About Me</HeadingBadge>
          <h2 className="main-heading text-primary">A Developer, a Creator, a Problem-Solver</h2>
          <p className="text-slate-600 text-lg max-w-2xl">
            Hey, I'm Kin Leon Zinzombe! From my first line of code to building full-scale applications, it's been a journey of curiosity, problem-solving, and continuous learning.
          </p>
        </article>
      </motion.header>

      {/* The Journey Section */}
      <div className="flex flex-col gap-12 w-full max-w-5xl text-left">
        
        {/* How It All Started */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-primary">How It All Started</h3>
          <p className="text-slate-700">
            Five years ago, I stumbled upon coding out of pure curiosity. I remember the thrill of writing my first "Hello, World!" and realizing I had just instructed a machine to do something. That moment sparked a deep fascination—I wanted to understand how things worked, how websites came to life, and how I could create something meaningful with just a keyboard.
          </p>
        </motion.div>

        {/* Early Struggles & First Wins */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-primary">From Struggles to First Wins</h3>
          <p className="text-slate-700">
            Like most self-taught developers, the beginning was tough. I spent countless nights debugging errors that didn't make sense, wrestling with JavaScript, and questioning if I was cut out for this. But then, I built my first real project—a simple to-do app. It was nothing groundbreaking, but seeing something I built actually work was a game-changer. That win fueled me to keep pushing forward.
          </p>
        </motion.div>

        {/* Stepping Into the Industry */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-primary">Breaking Into the Industry</h3>
          <p className="text-slate-700">
            As my skills grew, so did my ambition. I started freelancing, taking on small gigs, and eventually landed my first real software engineering job at CST. It was a whole new level—working with teams, building scalable applications, and learning how to write clean, maintainable code. This experience reinforced one thing: problem-solving through code was what I wanted to do for the rest of my life.
          </p>
        </motion.div>

        {/* Growth & Mastery */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-primary">Mastering My Craft</h3>
          <p className="text-slate-700">
            Over the years, I’ve worked on a range of projects—from mobile apps and web platforms to AI-powered chatbots. I’ve learned that the best developers aren’t the ones who know everything but the ones who never stop learning. Now, I specialize in full-stack development, building robust applications, and constantly refining my skills to stay ahead.
          </p>
        </motion.div>

        {/* Philosophy & Passion */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-primary">My Philosophy</h3>
          <p className="text-slate-700">
            I believe in writing code that is not just functional but also **elegant and maintainable**. To me, great software isn't just about solving a problem—it's about creating an experience. Every project I take on is an opportunity to push boundaries, learn something new, and deliver something that truly matters.
          </p>
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-primary">Beyond Code</h3>
          <p className="text-slate-700">
            When I'm not deep in code, I’m probably reading, exploring new tech trends, or brainstorming the next big idea. I love working on passion projects, helping other developers, and constantly challenging myself to create something innovative.
          </p>
        </motion.div>
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
        </Card>
      </motion.div>
    </section>
  );
}

export default About;
