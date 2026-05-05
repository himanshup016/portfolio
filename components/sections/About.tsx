"use client";

import { motion, Variants } from "framer-motion";
import { techStack, siteConfig } from "@/lib/data";
import { Download } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutSection() {
  const doubled = [...techStack, ...techStack];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            The person behind the code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text */}
          <div className="space-y-6">
            {[
              `I'm ${" "}a Full-Stack Software Engineer with 3+ years of experience architecting high-performance MERN stack applications. Specialize in building scalable distributed systems and event-driven architectures that deliver measurable business impact, such as improving load performance by 30%.`,
              `Expertize in the React and Node.js ecosystem — from designing reusable UI libraries with Material UI that cut code duplication by 40%, to implementing secure JWT/RBAC systems and AWS cloud deployments. Care deeply about quality, maintaining 85%+ test coverage and ensuring zero critical bugs through rigorous performance profiling.`,
              `Beyond shipping code, I have mentored junior developers to improve team code quality by 35% and accelerated delivery with a 95%+ sprint completion rate. Believe in engineering excellence, leveraging modern CI/CD pipelines and AI tools to build accessible, user-centric software that scales.`,
            ].map((text, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed text-base md:text-lg"
              >
                {text}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "10+", label: "Projects Shipped" },
                { value: "20+", label: "Happy Clients" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{label}</div>
                </div>
              ))}
            </motion.div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-2"
            >
              <a
                href={siteConfig.resumeUrl}
                download="Himanshu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", className: "rounded-full gap-2 font-semibold" })}
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right — avatar placeholder + decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative size-72 md:size-80">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin [animation-duration:20s]" />
              {/* Avatar circle */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 via-chart-4/10 to-chart-5/20 border border-primary/20 flex items-center justify-center overflow-hidden glow-primary-sm">
                <span className="text-8xl select-none">👨‍💻</span>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 bg-card border border-primary/30 rounded-full text-xs font-bold text-primary shadow-lg">
                React ⚛️
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 bg-card border border-primary/30 rounded-full text-xs font-bold text-primary shadow-lg">
                Next.js ▲
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div className="mt-24 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee gap-6 w-max">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2.5 bg-card border border-border/50 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors whitespace-nowrap shrink-0"
            >
              <span className="text-base">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
