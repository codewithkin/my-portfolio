"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-center gap-16 py-20 md:px-40 md:py-60 px-4">
      {/* Text */}
      <article className="flex flex-col gap-8 justify-center items-center md:justify-start md:items-start">
        {/* Available for work badge */}
        <Badge className="bg-green-100 rounded-full px-4 py-2 text-green-400 font-medium text-md gap-4">
          {/* Green dot */}
          <article className="w-4 h-4 rounded-full bg-green-400"></article>
          Available for work
        </Badge>

        <article className="flex flex-col gap-4">
          <TypeAnimation
            sequence={[
              "Bringing ideas to life",
              1000,
              "With code and a bit of fun",
              1000,
              "Hey there, I'm Kin",
            ]}
            wrapper="h2"
            speed={50}
            className="text-5xl text-center md:text-start md:text-7xl font-bold text-primary"
            cursor={false}
          />

          <motion.p
            initial={{
              display: "none",
              opacity: 0,
              y: -200,
            }}
            animate={{
              display: "flex",
              opacity: 1,
              y: 1,
            }}

            transition={{
              delay: 9,
              duration: 0.5
            }}
            className="text-center md:text-start md:max-w-2xl xl:max-w-3xl md:text-lg text-slate-600 font-regular"
          >
            A passionate software developer who loves turning ideas into real,
            functional, and beautiful digital experiences. Whether it&apos;s a
            sleek website, a powerful app, or a cool new feature, I bring
            creativity, speed, and clean code to the table. Let&apos;s build
            something awesome together!
          </motion.p>
        </article>
      </article>

      {/* Images */}
      <article className="flex flex-col gap-8"></article>
    </header>
  );
}

export default Header;
