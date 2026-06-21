"use client";
import { motion } from "framer-motion";
import {
  Bot,
  Database,
  Monitor,
  Server,
  ShieldCheck,
  Cloud,
  Wrench,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Agents",
    icon: Bot,
    skills: [
      "OpenAI Agents SDK",
      "Claude Agent SDK",
      "MCP Server SDK",
      "Google ADK",
      "n8n",
      "FlowiseAI",
    ],
  },
  {
    title: "Vector DB & RAG",
    icon: Layers,
    skills: ["Qdrant Cloud", "Gemini Embeddings", "OpenAI Embeddings"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Docusaurus",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["FastAPI", "Python", "Node.js", "Express.js"],
  },
  {
    title: "Database & ORM",
    icon: Database,
    skills: ["PostgreSQL", "NeonDB", "Drizzle ORM", "MongoDB", "Supabase"],
  },
  {
    title: "Auth",
    icon: ShieldCheck,
    skills: ["Better Auth", "NextAuth", "OAuth 2.0", "Clerk"],
  },
  {
    title: "Deployment",
    icon: Cloud,
    skills: ["Vercel", "Netlify", "GitHub Actions"],
  },
];

const developerTools = ["Claude Code", "OpenAI Codex"];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.06 },
  }),
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

const chipContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

export default function SkillsMarquee() {
  return (
    <div className="py-6 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category, i) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-zinc-50 dark:bg-card p-4 hover:border-primary/40 transition-colors duration-200"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground">
                  {category.title}
                </p>
              </div>

              {/* Skill chips */}
              <motion.div
                className="flex flex-wrap gap-1.5"
                variants={chipContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    className="text-xs font-medium px-2.5 py-1 rounded-md border border-border bg-white dark:bg-background text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Developer Tools — spans full width */}
        <motion.div
          custom={skillCategories.length}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="sm:col-span-2 rounded-xl border border-dashed border-border bg-zinc-50 dark:bg-card p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center shrink-0">
              <Wrench className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Tools I Work With Daily
            </p>
          </div>
          <motion.div
            className="flex flex-wrap gap-1.5"
            variants={chipContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {developerTools.map((tool) => (
              <motion.span
                key={tool}
                variants={chipVariants}
                className="text-xs font-medium px-2.5 py-1 rounded-md border border-dashed border-border bg-white dark:bg-background text-muted-foreground hover:border-primary/50 hover:text-primary transition-colors duration-150 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
