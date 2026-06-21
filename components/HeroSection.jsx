"use client";
import { Button } from "@/components/ui/button";
import { Send, ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { RiBriefcase4Fill, RiTodoFill } from "react-icons/ri";

import DevImg from "./DevImg";
import Social from "./Social";
import Badge from "./Badge";

const HeroSection = () => {
  return (
    <section className="relative py-8 pb-16 md:pb-12 xl:pt-10 bg-hero-pattern bg-no-repeat bg-bottom bg-cover dark:bg-none mx-3">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Text content */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm uppercase font-semibold mb-4 text-primary tracking-widest"
            >
              Agentic AI Developer — Karachi, Pakistan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="h1 mb-5"
            >
              Abdul Samad Siddiqui
            </motion.h1>

            {/* Single clean bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="text-base text-muted-foreground leading-relaxed md:max-w-[480px] mx-auto xl:mx-0 mb-5"
            >
              18yo developer from Karachi building production-grade AI agent
              systems and full-stack apps for clients across the UK, US, and UAE
              — lead-capture agents, automation workflows, and real platforms
              with real users.
            </motion.p>

            {/* Stats pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-wrap justify-center xl:justify-start gap-2 mb-8"
            >
              {["3+ Years Exp.", "50+ Projects", "UK · US · UAE"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-border text-muted-foreground bg-accent/40"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  Get in Touch <Send size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8"
            >
              <Social
                iconsStyle="text-foreground text-[28px] hover:text-primary transition-all"
                containerStyles="flex justify-center xl:justify-start gap-x-5"
              />
            </motion.div>
          </div>

          {/* Photo + badges */}
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[10%] right-0"
              icons={<RiBriefcase4Fill />}
              textOfBadge="Years of experience"
              endCountNumber={3}
              sign={"+"}
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[50px]"
              icons={<RiTodoFill />}
              textOfBadge="Projects Completed"
              endCountNumber={50}
              sign="+"
            />
            <div className="bg-hero-shape-light dark:bg-hero-shape-dark w-[510px] h-[510px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              imgSrc="/hero/myPic.png"
              containerStyles="bg-hero-shape w-[509px] h-[462px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator — anchored to section bottom, truly centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
