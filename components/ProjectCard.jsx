"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Bot, Lock, Github } from "lucide-react";

const AIVisual = ({ project }) => (
  <div className="relative w-full h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex flex-col items-center justify-center overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
    <div className="absolute w-28 h-28 bg-primary/20 rounded-full blur-3xl" />
    <Bot className="w-9 h-9 text-primary/80 relative z-10 mb-3" />
    {project.isPrivate ? (
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

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
      className="h-full"
    >
      <div className="group h-full flex flex-col rounded-2xl border border-border hover:border-primary/40 bg-card overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

        {/* Image / visual area */}
        <div className="relative h-[210px] overflow-hidden bg-muted shrink-0">
          {/* Category badge */}
          <span className="absolute top-3 left-3 z-20 inline-block text-xs uppercase tracking-widest font-semibold text-primary bg-primary/10 backdrop-blur-sm rounded-full px-3 py-1 border border-primary/20">
            {project.category}
          </span>

          {project.noImage ? (
            <AIVisual project={project} />
          ) : (
            <>
              <Image
                src={project.image}
                fill
                alt={project.name}
                className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
              />
              {/* Hover overlay with action buttons */}
              <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit live project"
                    className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-900" />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View source on GitHub"
                    className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200 shadow-lg"
                  >
                    <Github className="w-4 h-4 text-gray-900" />
                  </Link>
                )}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">

          {/* Title + description */}
          <div className="space-y-1.5">
            <h4 className="text-base font-semibold tracking-tight leading-snug group-hover:text-primary transition-colors duration-200">
              {project.name}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Stack tags */}
          {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA footer */}
          <div className="mt-auto pt-3 border-t border-border/60">
            {project.link ? (
              <Link
                href={project.link}
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
      </div>
    </motion.div>
  );
};

export default ProjectCard;
