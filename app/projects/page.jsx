"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { tier1Projects, tier2Projects } from "@/lib/utils/variables";

const TierDivider = ({ label, primary }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="h-px flex-1 bg-border" />
    <span
      className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border ${
        primary
          ? "text-primary border-primary/30 bg-primary/5"
          : "text-muted-foreground border-border bg-muted/40"
      }`}
    >
      {label}
    </span>
    <div className="h-px flex-1 bg-border" />
  </div>
);

const Projects = () => {
  return (
    <section className="min-h-screen py-14">
      <div className="container mx-auto px-4 md:px-8">

        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            My Projects
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Production-grade AI agents and full-stack applications — built for
            real users, deployed in the real world.
          </p>
        </motion.div>

        {/* Tier 1 — AI & Agentic Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-20"
        >
          <TierDivider label="AI & Agentic Projects" primary />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {tier1Projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Tier 2 — Full-Stack Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-24"
        >
          <TierDivider label="Full-Stack Projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier2Projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
