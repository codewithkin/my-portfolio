"use client";
import HeadingBadge from "@/components/reusable/HeadingBadge";
import { Card, CardContent } from "@/components/ui/card";
import { PenLine } from "lucide-react";
import { motion } from "framer-motion";

function Blog() {
  return (
    <section className="flex flex-col items-center text-center">
      {/* Header Section */}
      <motion.header
        className="header-custom mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <article className="flex flex-col gap-2 items-center text-center">
          <HeadingBadge>Blog</HeadingBadge>
          <h2 className="main-heading text-primary">
            Insights, Ideas & Experiments
          </h2>
          <p className="text-slate-600 text-lg max-w-xl">
            I’ll be sharing deep dives, lessons learned, and experiments from my
            journey in software development. Check back soon for fresh content!
          </p>
        </article>
      </motion.header>

      {/* Coming Soon Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        <Card className="w-full max-w-lg bg-muted/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardContent className="flex flex-col items-center gap-4 p-6">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <PenLine className="h-12 w-12 text-primary" />
            </motion.div>
            <p className="text-slate-700 text-lg">
              I haven’t started writing just yet, but great things are on the
              way! 🚀
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

export default Blog;
