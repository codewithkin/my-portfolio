import React from "react";
import ScrollInView from "../reusable/ScrollInView";
import HeadingBadge from "../reusable/HeadingBadge";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { services } from "@/data/services";
import { Service } from "@/types/services";

function Services() {
  return (
    <ScrollInView>
      {/* Section Heading */}
      <article className="w-full flex md:flex-row flex-col items-center md:items-end justify-center md:justify-between gap-8 md:gap-0">
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
      <article className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
        {services.map((service: Service, index: number) => {
          const IconComponent = service.icon; // Extract the icon component

          return (
            <Card
              key={service.id}
              className={`relative overflow-hidden text-white bg-cover bg-center p-6 flex flex-col justify-between
                ${index === 0 ? "col-span-2 md:col-span-3" : ""}
                ${index === 1 ? "col-span-2 md:col-span-2" : ""}
                ${index === 2 ? "col-span-2 md:col-span-5" : ""}
                ${index === 3 || index === 4 ? "col-span-2 md:col-span-2" : ""}
              `}
              style={{ backgroundImage: `url(${service.bg})` }}
            >
              <CardHeader className="flex items-center gap-4">
                <IconComponent size={32} className="text-white" />
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  <Link href={service.action}>{service.actionText}</Link>
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