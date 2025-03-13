"use client";
import ScrollInView from "../reusable/ScrollInView";
import HeadingBadge from "../reusable/HeadingBadge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Testimonials() {
  return (
    <ScrollInView>
      {/* Section Heading */}
      <article className="w-full flex md:flex-row-reverse flex-col-reverse items-center md:items-end justify-center md:justify-between gap-2 md:gap-0">
        <article className="flex flex-col gap-4 text-center md:text-end justify-center items-center md:items-end md:justify-end">
          <HeadingBadge>Testimonials</HeadingBadge>
          <h2 className="heading">Happy Clients, Real Results</h2>
          <p className="text-xl text-slate-600 font-regular">
            Great software isn’t just about clean code—it’s about impact. Here’s
            what people I’ve worked with have to say about the products we’ve
            built together.
          </p>
        </article>

        {/* CTA */}
        <Button asChild>
          <Link
            className="flex gap-2 items-center transition-all duration-300 hover:gap-4"
            href="https://calendly.com/codewithkin/15-minute-call"
            target="_blank"
          >
            Book a call
            <ArrowRight strokeWidth={1.5} size={20} />
          </Link>
        </Button>
      </article>

      {/* Testimonials cards */}
      <article className="grid lg:grid-cols-3 sm:grid-cols-2 w-full gap-8 items-center my-16 grid-rows-1">
        {testimonials.map((testimonial: Testimonial) => (
          <motion.article
            initial={{
              display: "none",
              opacity: 0,
              y: -100,
            }}
            
            key={testimonial.id}

            animate={{
              display: "flex",
              flexDirection: "column",
              opacity: 1,
              y: 1,
            }}

            className="rounded-xl bg-gradient-to-t from-slate-400 to-slate-800 text-white hover:border hover:border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-300 md:p-16 p-8 flex flex-col gap-8"
          >
            <Avatar className="w-16 h-16">
              <AvatarFallback className="border-2 transition-all duration-300 border-purple-400 hover:cursor-pointer hover:border-purple-600">
                {testimonial.name[0] || "P"}
              </AvatarFallback>
              <AvatarImage src={testimonial.imageUrl} />
            </Avatar>

            {/* Personal info */}
            <article className="flex flex-col gap-2 justify-center">
              <h3 className="font-semibold text-slate-300 text-xl">
                {testimonial.name}
              </h3>
              <h4>{testimonial.role}</h4>
            </article>

            <p className="text-slate-300">{testimonial.content}</p>

            <Button
              className="bg-blue-500 transition-all duration-300 hover:bg-blue-900 text-white "
              asChild
            >
              <Link href={testimonial.linkedIn}>View on LinkedIn</Link>
            </Button>
          </motion.article>
        ))}
      </article>
    </ScrollInView>
  );
}

export default Testimonials;
