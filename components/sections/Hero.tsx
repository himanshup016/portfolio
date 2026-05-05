"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig, typingRoles } from "@/lib/data";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return displayed;
}

const socials = [
  { icon: Icons.github, href: siteConfig.github, label: "GitHub" },
  { icon: Icons.linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Icons.twitter, href: siteConfig.twitter, label: "Twitter / X" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } }),
};

export default function HeroSection() {
  const typed = useTypingEffect(typingRoles);
  const magnetRef = useRef<HTMLDivElement>(null);

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = magnetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.3;
    const dy = (e.clientY - cy) * 0.3;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    if (magnetRef.current) magnetRef.current.style.transform = "translate(0,0)";
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-chart-4/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start order-2 lg:order-1">
            {/* Greeting pill */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              Available for hire
            </motion.div>

            {/* Name */}
            <motion.h1
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-chart-4 to-chart-5 bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 h-10 flex items-center justify-center lg:justify-start gap-2"
            >
              <span>I&apos;m a</span>
              <span className="text-foreground min-w-[280px] text-left">
                {typed}
                <span className="inline-block w-0.5 h-6 bg-primary ml-0.5 animate-pulse align-middle" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
              className="max-w-2xl text-muted-foreground md:text-lg leading-relaxed mb-10"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              {/* Magnetic CTA */}
              <div
                ref={magnetRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="transition-transform duration-200 ease-out"
              >
                <Link
                  href="#projects"
                  className={buttonVariants({ size: "lg", className: "rounded-full px-8 py-6 text-base font-semibold glow-primary-sm hover:glow-primary transition-all duration-300 group" })}
                >
                  View My Work
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full px-8 py-6 text-base font-semibold border-2" })}
              >
                Let&apos;s Talk
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.5}
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-11 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-chart-4/20 to-chart-5/20 rounded-[2rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-[2rem] border border-primary/20" />

              {/* Image box */}
              <div className="relative size-64 sm:size-80 md:size-96 rounded-[2rem] overflow-hidden border-2 border-primary/20 bg-card glow-primary-sm shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile-pic.png"
                  alt={siteConfig.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay glass effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Icons.github className="size-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">GitHub</div>
                    <div className="text-sm font-bold">100+ Commits</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 p-4 rounded-2xl bg-card/80 backdrop-blur-md border border-border shadow-xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-chart-4/10 flex items-center justify-center text-chart-4">
                    <span className="text-xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Experience</div>
                    <div className="text-sm font-bold">3+ Years</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
