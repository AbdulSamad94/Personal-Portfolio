// TIER 1 — AI/Agentic Projects (featured prominently)
export const tier1Projects = [
  {
    image: "/work/legalyze-ai.png",
    category: "AI Agent",
    name: "LegalyzeAI",
    description:
      "Multi-agent legal document analyzer. Upload any legal document and a team of specialized AI agents handles it — clause extraction, risk flagging, plain-English summaries, and cross-referencing. No legal background needed.",
    link: "https://legalyze-ai.vercel.app/",
    stack: ["Next.js", "FastAPI", "OpenAI Agents SDK", "TypeScript"],
    tier: 1,
  },
  {
    image: "/work/ironhaus.png",
    category: "AI Agent",
    name: "IronHaus",
    description:
      "AI lead-capture agent for gym owners. A conversational AI agent that qualifies leads, answers questions, books consultations, and captures contact info — running 24/7 without human involvement.",
    link: "https://ironhause.vercel.app/",
    stack: ["Next.js", "FastAPI", "OpenAI Agents SDK", "TypeScript"],
    tier: 1,
  },
  {
    image: "/work/cognita-learn.png",
    category: "AI Agent",
    name: "CognitaLearn",
    description:
      "Agentic RAG-powered learning platform. Ingests course material and generates personalized learning paths, quizzes, and detailed explanations using retrieval-augmented generation. Won full marks at GIAIC Hackathon I.",
    link: "https://cognitalearn.vercel.app/",
    stack: ["Next.js", "OpenAI Agents SDK", "RAG", "Qdrant", "TypeScript"],
    tier: 1,
  },
  {
    image: null,
    noImage: true,
    isPrivate: true,
    category: "AI Agent",
    name: "Personal AI Employee",
    description:
      "Autonomous AI employee with Gmail and LinkedIn inbox watchers, human-in-the-loop approval via Telegram, and Odoo ERP integration via MCP. Monitors, drafts, and executes — with the human staying in control via approve/reject.",
    link: null,
    stack: ["OpenAI Agents SDK", "MCP", "FastAPI", "n8n", "Odoo"],
    tier: 1,
  },
];

// TIER 2 — Full-Stack Projects (shown subordinate to Tier 1)
export const tier2Projects = [
  {
    image: "/work/work10.png",
    category: "Full-Stack",
    name: "Full Stack Blog Website",
    description:
      "Full-stack blog platform with authentication, content management, comments, and a responsive design. Built with Next.js, MongoDB, and NextAuth.",
    link: "https://metas-blog.vercel.app/",
    stack: ["Next.js", "MongoDB", "NextAuth", "TailwindCSS"],
    tier: 2,
  },
  {
    image: "/work/work4.png",
    category: "Full-Stack",
    name: "Full Stack E-Commerce Website",
    description:
      "Fully functional e-commerce marketplace with product catalog, shopping cart, checkout, and admin dashboard built with Next.js.",
    link: "https://e-commerce-marketplace-ten.vercel.app/",
    stack: ["Next.js", "TailwindCSS"],
    tier: 2,
  },
  {
    image: "/work/styling-corner.png",
    category: "Full-Stack",
    name: "Styling Corner",
    description:
      "Pixel-perfect Figma-to-code conversion. A fashion-forward website built with Next.js, React, and TailwindCSS — zero deviation from the original design.",
    link: "https://styling-corner-main.vercel.app/",
    stack: ["Next.js", "TailwindCSS"],
    tier: 2,
  },
];

// All projects combined — used on /projects page
export const projectData = [...tier1Projects, ...tier2Projects];

// Subset for homepage carousel — Tier 1 first, then top Tier 2
export const projectData2 = [...tier1Projects, ...tier2Projects];
