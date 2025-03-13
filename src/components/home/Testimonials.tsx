import React from "react";
import ScrollInView from "../reusable/ScrollInView";
import HeadingBadge from "../reusable/HeadingBadge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Testimonial } from "@/types/testimonials";
import { Card } from "../ui/card";
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
          Great software isn’t just about clean code—it’s about impact. Here’s what people I’ve worked with have to say about the products we’ve built together.
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
      <article className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 items-center my-16">
        {
            testimonials.map((testimonial: Testimonial) => (
                <article className="rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-300 hover:cursor-pointer p-8 flex flex-col gap-8">
                    <Avatar>
                        <AvatarFallback className="border-2 w-8 h-8 transition-all duration-300 border-purple-400 hover:cursor-pointer hover:border-purple-600">
                            {testimonial.name[0] || "P"}
                        </AvatarFallback>
                        <AvatarImage
                            src={testimonial.imageUrl}
                        />
                    </Avatar>

                    {/* Personal info */}
                    <article className="flex flex-col gap-2 justify-center">
                        <h3 className="font-semibold text-primary text-xl">{testimonial.name}</h3>
                        <h4>{testimonial.role}</h4>
                    </article>

                    <p className="text-slate-600">{testimonial.content}</p>

                    <Button className="bg-blue-500 transition-all duration-300 hover:bg-blue-900 text-white " asChild>
                        <Link href={testimonial.linkedIn}>
                            View on LinkedIn
                        </Link>
                    </Button>
                </article>
            ))
        }
      </article>
    </ScrollInView>
  );
}

export default Testimonials;
