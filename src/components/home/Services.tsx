import React from "react";
import ScrollInView from "../reusable/ScrollInView";
import HeadingBadge from "../reusable/HeadingBadge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { services } from "@/data/services";
import { Service } from "@/types/services";
import { big } from "framer-motion/client";

function Services() {
  return (
    <ScrollInView>
      {/* Section Heading */}
      <article className="w-full flex md:flex-row flex-col items-center md:items-end justify-center md:justify-between gap-2 md:gap-0">
        <article className="flex flex-col gap-4 text-center md:text-start justify-center items-center md:items-start md:justify-start">
          <HeadingBadge>Services</HeadingBadge>
          <h2 className="heading">Software So Good, It Speaks for Itself</h2>
          <p className="text-xl text-slate-600 font-regular">
            Need a website? An app? Something totally unique? I turn ideas into
            smooth, fast, and user-friendly software—no hassle.
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

      {/* Bento Grid Layout */}
      <article className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {services.map((service: Service, index: number) => {
          const IconComponent = service.icon; // Extract the icon component

          return (
            <Card
              key={service.id}
              className={`relative hover:shadow-lg transition-all duration-300 hover:cursor-pointer overflow-hidden ${service.bg && "text-white backdrop-blur-2xl"} bg-cover bg-center p-6 flex flex-col justify-between
                ${index === 0 ? "col-span-2 md:col-span-3" : ""}
                ${index === 1 ? "col-span-2 md:col-span-2" : ""}
                ${index === 2 ? "col-span-2 md:col-span-5" : ""}
                ${index === 3 || index === 4 ? "col-span-2" : ""}
              `}
              style={{ backgroundImage: `url(${service.bg})` }}
            >
              <div
                className={`${service.bg ? "absolute" : "hidden"} inset-0 bg-black/50 backdrop-blur-xs`}
              ></div>
              <CardHeader className="flex items-start gap-4 relative z-10">
                <article
                  className={`rounded-full p-4 bg-gradient-to-tr from-sky-300 to-blue-600 text-white hover:cursor-pointer hover:from-blue-600 hover:to-purple-300 transition-all duration-500`}
                >
                  <IconComponent size={32} className="" />
                </article>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-md">{service.description}</p>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button
                  asChild
                  variant="outline"
                  className={`font-medium ${service.bg ? "bg-white text-primary" : "bg-primary text-white hover:bg-slate-900 hover:text-white"}`}
                >
                  <Link
                    className={` ${service.bg && "text-primary"} flex gap-2 transition-all duration-300 hover:gap-4 items-center`}
                    href={service.action}
                    target="_blank"
                  >
                    {service.actionText}
                    <ArrowRight size={20} strokeWidth={1.5} />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </article>
    </ScrollInView>
  );
}

export default Services;
