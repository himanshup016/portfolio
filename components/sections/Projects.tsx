"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { projects } from "@/lib/data";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

const filters = ["All", "Featured"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            Projects
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            A curated selection of projects that showcase my range — from
            full-stack platforms to design tools.
          </p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative bg-card border border-border/50 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden"
              >
                {/* Card top gradient accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle background glow on hover */}
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Featured badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}

                <div className="relative z-10 flex flex-col gap-4 flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-snug pr-16">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-secondary/80 text-secondary-foreground"
                      >
                        <Tag className="size-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-1">
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-1.5 text-xs h-8 px-3 rounded-full" })}
                    >
                      <Icons.github className="size-3.5" />
                      Code
                    </Link>
                    <Link 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={buttonVariants({ size: "sm", className: "gap-1.5 text-xs h-8 px-3 rounded-full" })}
                    >
                      <ExternalLink className="size-3.5" />
                      Live Demo
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
