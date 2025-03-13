import React from "react";
import ScrollInView from "../reusable/ScrollInView";
import HeadingBadge from "../reusable/HeadingBadge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    </ScrollInView>
  );
}

export default Testimonials;
