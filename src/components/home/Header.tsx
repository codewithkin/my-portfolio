"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-center gap-16 py-20 md:px-40 md:py-60 px-4">
      {/* Text */}
      <article className="w-1/2 flex flex-col gap-8 justify-center items-center md:justify-start md:items-start">
        {/* Available for work badge */}
        <Badge className="bg-green-100 border border-green-400 rounded-full px-4 py-2 text-green-400 font-medium text-md gap-2 text-sm">
          {/* Green dot */}
          <article className="w-2 h-2 rounded-full bg-green-400"></article>
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
              duration: 0.5,
            }}
            className="text-center md:text-start md:max-w-xl xl:max-w-3xl md:text-lg text-slate-600 font-regular"
          >
            A passionate software developer who loves turning ideas into real,
            functional, and beautiful digital experiences. Whether it&apos;s a
            sleek website, a powerful app, or a cool new feature, I bring
            creativity, speed, and clean code to the table. Let&apos;s build
            something awesome together!
          </motion.p>
        </article>

        {/* CTA */}
        <motion.article
          initial={{
            display: "none",
            opacity: 0,
          }}
          animate={{
            display: "flex",
            opacity: 1,
          }}
          transition={{
            delay: 10,
            duration: 0.5,
          }}
          className="flex flex-col md:flex-row gap-4 items-center w-full"
        >
          <Button
            className="rounded-full bg-primary hover:bg-slate-900 w-full md:w-fit py-6 md:py-4"
            asChild
          >
            <Link
              target="_blank"
              href="https://calendly.com/codewithkin/15-minute-call"
            >
              Book a call
            </Link>
          </Button>
          <Button
            variant="outline"
            className="rounded-full hover:bg-slate-200 w-full md:w-fit py-6 md:py-4"
            asChild
          >
            <Link target="_blank" href="/projects">
              My Projects
            </Link>
          </Button>
        </motion.article>
      </article>

      {/* Assets */}
      <article className="flex flex-col gap-8 w-1/2">
        {/* Card */}
        <article className="grid grid-cols-2 gap-2 items-center">
          <article
            style={{
              backgroundImage: "url('/images/backgrounds/field.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="h-full rounded-xl shadow-md p-8 flex flex-col relative text-white"
          >
            <article>
              <h2 className="font-semibold text-xl">Kin Leon Zinzombe</h2>
              <p className="text-slate-200 text-md font-regular">
                Mutare, Zimbabwe
              </p>
            </article>

            <article className="absolute bottom-4 left-4 right-0 flex flex-col gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Badge className="rounded-full bg-transparent bg-blur text-white font-medium ml-2 text-sm backdrop-blur-3xl">
                      Fullstack Developer
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    I am an accredited fullstack developer of 5 years. Having
                    worked both in corporate and as a solo developer, I bring
                    the perfect blend of professionalism and humanity that fits
                    any budget and project
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Badge className="rounded-full bg-primary text-white font-medium text-sm">
                      $40/hr - $90/hr
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    My hourly rate is $90hr however this rate is negotiable down
                    to $40/hr for simpler projects.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </article>
          </article>

          {/* Headshot */}
          <Image
            width={300}
            className="rounded-xl"
            height={100}
            alt="Kin Leon Zinzombe"
            src="/images/me.jpg"
          />
        </article>
      </article>
    </header>
  );
}

export default Header;
