"use client";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { projects } from "@/data/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 4000 })] // Auto-scroll every 4 seconds
  );

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="py-16">
      <div className="mx-auto text-center">
        <h3 className="text-4xl md:text-7xl lg:text-9xl font-bold text-primary">
          Recent Projects
        </h3>
        <p className="text-muted-foreground text-lg mt-4">
          A look at some of the work I&apos;ve done.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden mt-10" ref={emblaRef}>
        <div className="flex gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="min-w-[80%] md:min-w-[50%] lg:min-w-[40%] relative bg-muted p-6 rounded-2xl shadow-lg"
            >
              <Image
                src={project.imageUrl}
                alt={project.name}
                width={800}
                height={450}
                className="rounded-lg"
              />
              <div className="mt-4">
                <Badge className="absolute top-4 left-4">{project.badge}</Badge>
                <h4 className="text-2xl font-bold">{project.name}</h4>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} className="bg-secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live Project
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className="w-16 h-16 rounded-lg overflow-hidden border border-primary hover:opacity-75 transition-opacity"
            onClick={() => scrollTo(index)}
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Projects;