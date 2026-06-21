"use client";
import { motion } from "framer-motion";
import { GitMerge, Github } from "lucide-react";

const contributions = [
  {
    repo: "openai/openai-agents-python",
    label: "PR Merged",
    description:
      "Merged PR into the official OpenAI Agents SDK — one of the core repositories for building production agentic systems.",
  },
  {
    repo: "FlowiseAI/Flowise",
    label: "PR Merged",
    description:
      "Merged multiple PRs into Flowise, the open-source LLM flow builder used by thousands of developers.",
  },
  {
    repo: "simple-icons/simple-icons",
    label: "Icon Added",
    description:
      "Submitted the FlowiseAI brand icon to Simple Icons — now available in icon packs used across the web.",
  },
  {
    repo: "Various repositories",
    label: "Active Contributor",
    description:
      "Multiple additional merged contributions across open-source projects in the AI and developer tooling ecosystem.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const OpenSource = () => {
  return (
    <section className="py-16 mx-3">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-12"
        >
          <h2 className="section-words mb-4 mx-auto">Open Source</h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Contributing back to the tools and communities that make this work
            possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {contributions.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group flex gap-4 p-5 rounded-xl border border-border bg-background hover:border-primary transition-colors duration-300"
            >
              <div className="shrink-0 mt-0.5">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center">
                  <GitMerge className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Github className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-xs font-mono text-muted-foreground truncate">
                      {item.repo}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 shrink-0">
                    {item.label}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
