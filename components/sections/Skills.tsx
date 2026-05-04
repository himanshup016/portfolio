"use client";

import { motion } from "framer-motion";
import { Code2, Monitor, Server, Wrench, BrainCircuit, Users, CheckCircle2 } from "lucide-react";
import { skillsData } from "@/lib/data";

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages": <Code2 className="size-5 text-purple-600 dark:text-purple-400" />,
  "Frameworks/Libraries": <Monitor className="size-5 text-blue-600 dark:text-blue-400" />,
  "Backend / APIs": <Server className="size-5 text-emerald-600 dark:text-emerald-400" />,
  "Tools": <Wrench className="size-5 text-slate-600 dark:text-slate-400" />,
  "Best Practices": <BrainCircuit className="size-5 text-green-600 dark:text-green-500" />,
  "Soft Skills": <Users className="size-5 text-amber-600 dark:text-amber-500" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
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
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent inline-block pb-2">
            My Skills
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillsData.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card dark:bg-[#0b1121] border border-border/50 dark:border-border/20 rounded-2xl p-6 shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {categoryIcons[category.category]}
                <h3 className="text-xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => {
                  const Icon = item.icon || CheckCircle2;
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-border/30 text-sm font-medium text-secondary-foreground hover:bg-secondary/50 hover:border-primary/40 transition-colors"
                    >
                      <Icon className="size-4 text-primary opacity-80" />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
