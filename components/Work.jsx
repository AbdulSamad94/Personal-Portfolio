"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { tier1Projects } from "@/lib/utils/variables";
import { ArrowRight, ArrowUpRight, Bot, Lock } from "lucide-react";

const AIVisual = ({ isPrivate }) => (
  <div className="relative w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    />
    <div className="absolute w-36 h-36 bg-primary/20 rounded-full blur-3xl" />
    <Bot className="w-10 h-10 text-primary/80 relative z-10 mb-3" />
    {isPrivate ? (
      <div className="flex items-center gap-1.5 relative z-10 bg-black/50 border border-white/10 rounded-full px-3 py-1">
        <Lock className="w-3 h-3 text-gray-400" />
        <span className="text-xs text-gray-400 font-medium">Private Build</span>
      </div>
    ) : (
      <div className="flex items-center gap-1.5 relative z-10 bg-primary/20 border border-primary/30 rounded-full px-3 py-1">
        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        <span className="text-xs text-primary font-medium">Live</span>
      </div>
    )}
  </div>
);

const CategoryBadge = ({ label }) => (
  <span className="inline-block text-xs uppercase tracking-widest font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
    {label}
  </span>
);

const StackTag = ({ label }) => (
  <span className="text-xs text-muted-foreground bg-zinc-100 dark:bg-zinc-800 rounded-md px-2.5 py-1 font-medium">
    {label}
  </span>
);

const FeaturedCard = ({ project }) => {
  const { image, noImage, isPrivate, category, name, description, stack, link } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative rounded-2xl border border-border hover:border-primary/40 bg-card overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
        {/* Content */}
        <div className="flex flex-col p-7 lg:p-10 lg:border-r border-b lg:border-b-0 border-border/60">
          {/* Top row: badge + number */}
          <div className="flex items-center justify-between mb-6">
            <CategoryBadge label={category} />
            <span className="text-xs font-mono font-bold text-muted-foreground/30 tracking-widest">
              01
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-3">
            {name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            {description}
          </p>

          {/* Divider */}
          <div className="border-t border-border/60 pt-6 mt-auto space-y-5">
            {/* Stack */}
            <div>
              <p className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/50 mb-2.5">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <StackTag key={tech} label={tech} />
                ))}
              </div>
            </div>

            {/* CTA */}
            {link ? (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Visit Project <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                <Lock className="w-3.5 h-3.5" />
                Private Build
              </span>
            )}
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-[260px] lg:h-auto min-h-[320px] overflow-hidden">
          {noImage ? (
            <AIVisual isPrivate={isPrivate} />
          ) : (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MiniCard = ({ project, index }) => {
  const { image, noImage, isPrivate, category, name, description, stack, link } = project;
  const num = String(index + 2).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.09 }}
      className="group flex flex-col rounded-2xl border border-border hover:border-primary/40 bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Visual */}
      <div className="relative h-[200px] overflow-hidden bg-muted shrink-0">
        {noImage ? (
          <AIVisual isPrivate={isPrivate} />
        ) : (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
          />
        )}
        {/* Number badge overlay */}
        <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-white/60 bg-black/40 backdrop-blur-sm rounded-full px-2 py-0.5 leading-none">
          {num}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="space-y-1.5">
          <CategoryBadge label={category} />
          <h3 className="text-base font-semibold tracking-tight leading-snug pt-0.5">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        {/* Stack */}
        <div className="mt-1">
          <p className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground/50 mb-1.5">
            Built with
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stack.slice(0, 4).map((tech) => (
              <StackTag key={tech} label={tech} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-border/60">
          {link ? (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View Project <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              Private Build
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [featured, ...rest] = tier1Projects;

  return (
    <section className="my-20 lg:my-40 mx-4">
      <div className="container mx-auto space-y-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-5"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              AI & Agentic Projects
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              What I&apos;ve Built
            </h2>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed">
              Production-grade AI agents, RAG pipelines, and full-stack
              applications built for real users.
            </p>
          </div>
          <Link href="/projects" className="shrink-0">
            <Button variant="outline" className="group gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>

        {/* Featured project */}
        <FeaturedCard project={featured} />

        {/* Remaining projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, index) => (
            <MiniCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
