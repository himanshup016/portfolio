"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Experience</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Where I&apos;ve worked
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
            A timeline of my professional journey, from intern to senior engineer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Static track */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/60 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-primary via-chart-4 to-chart-5 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex gap-8 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Desktop: half-width card */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                  {/* Dot */}
                  <div className="relative flex flex-col items-center shrink-0 pl-6 md:pl-0 md:w-16 md:items-center">
                    <div className="size-4 rounded-full bg-primary border-4 border-background shadow-md shadow-primary/30 z-10 md:mt-6" />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 md:w-[calc(50%-2rem)] bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group ${
                      isEven ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    {/* Top accent */}
                    <div className="absolute top-0 inset-x-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        <div className="flex items-center gap-1.5 text-primary font-semibold text-sm mt-0.5">
                          <Briefcase className="size-3.5" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
