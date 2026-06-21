"use client";
import React from "react";
import { motion } from "framer-motion";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "AI Agents & Automation",
    description:
      "Multi-agent systems using OpenAI Agents SDK, Claude Agent SDK, and Google ADK. RAG pipelines, MCP integrations, and n8n workflows that automate real business processes.",
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Full-Stack Development",
    description:
      "Production-ready applications with Next.js and FastAPI. From database design to deployment — end-to-end, TypeScript-first, and built to scale.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Frontend UI/UX",
    description:
      "Responsive, accessible, and visually sharp interfaces using React, Tailwind CSS, and ShadCN UI. Pixel-perfect implementation from design to production.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section className="mb-12 lg:mb-24 mx-3">
      <div className="container lg:mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="section-words mb-12 lg:mb-24 text-center mx-auto"
        >
          What I do
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-12 lg:gap-y-24 lg:gap-x-8">
          {servicesData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <Card className="relative bg-white dark:bg-background border-2 border-primary w-[280px] lg:w-full h-[300px] flex flex-col pt-16 pb-10 justify-center items-center place-self-center">
                <CardHeader className="absolute text-primary -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4 text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
