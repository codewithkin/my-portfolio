"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import HeadingBadge from "@/components/reusable/HeadingBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { projects } from "@/data/projects"; // Import project data

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" ||
      project.badge.toLowerCase() === selectedCategory,
  );

  return (
    <section className="container mx-auto py-16">
      {/* Header Section */}
      <header className="header-custom mb-8">
        <article className="flex flex-col gap-2 items-center text-center">
          <HeadingBadge>Projects</HeadingBadge>
          <h2 className="main-heading text-primary">
            What I've been up to recently
          </h2>
          <p className="text-slate-600 text-lg">
            The proof is in the pudding. Here are a few of my most recent
            personal and client projects.
          </p>
        </article>
      </header>

      {/* Filtering Tabs */}
      <Tabs
        defaultValue="all"
        onValueChange={setSelectedCategory}
        className="mb-8"
      >
        <TabsList className="flex justify-center gap-2">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web app">Web Apps</TabsTrigger>
          <TabsTrigger value="saas web app">SaaS</TabsTrigger>
          <TabsTrigger value="landing page">Landing Pages</TabsTrigger>
          <TabsTrigger value="mobile app">Mobile Apps</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div key={project.id} layout>
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group overflow-hidden transition hover:shadow-xl cursor-pointer">
                  <CardHeader className="relative p-0">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="w-full object-cover transition group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-primary text-white px-3 py-1 text-sm rounded-md">
                      {project.badge}
                    </span>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <p className="text-slate-600 text-sm">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>

              {/* Expanded Project Modal */}
              <DialogContent className="max-w-2xl">
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={600}
                    height={350}
                    className="w-full rounded-lg object-cover"
                  />
                  <h3 className="text-2xl font-bold mt-4">{project.name}</h3>
                  <p className="text-slate-600">{project.description}</p>
                  <div className="flex gap-3 mt-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-200 px-3 py-1 text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/80"
                  >
                    View Live Project
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
