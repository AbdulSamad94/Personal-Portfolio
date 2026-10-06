// AI projects, ordered with IronhausAI as the flagship.
export const tier1Projects = [
  {
    name: "IronhausAI",
    image: "/work/ironhaus.png",
    category: "AI Lead Automation SaaS",
    description:
      "A multi-tenant AI lead-response platform for independent gyms. Turns website and Instagram enquiries into qualified leads, booking requests, and staff handoffs, with gym-specific knowledge and tenant isolation.",
    link: "https://www.ironhausai.com",
    stack: [
      "Next.js",
      "FastAPI",
      "OpenAI Agents SDK",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "Upstash Redis",
      "Resend",
    ],
    tier: 1,
    highlights: [
      {
        title: "Business workflow",
        text: "Translate inbound gym enquiries into qualification, booking requests, and controlled human escalation.",
      },
      {
        title: "Customer integrations",
        text: "Deploy an embeddable website widget, Meta webhooks, and Instagram messaging with tenant-specific knowledge.",
      },
      {
        title: "Production safeguards",
        text: "Verify signatures, encrypt OAuth credentials, and handle rate limits, retries, deduplication, and idempotency.",
      },
      {
        title: "Repeatable onboarding",
        text: "Reuse onboarding and configuration systems while keeping each gym’s data and knowledge isolated.",
      },
    ],
  },
  {
    name: "LegalyzeAI",
    image: "/work/legalyze-ai.png",
    category: "Multi-Agent AI",
    description:
      "Legal document analysis with specialized summarization, risk-detection, and clause-analysis agents sharing context. Dual-model inference and content-addressed caching reduce redundant calls; transactional quotas prevent concurrent requests from bypassing limits.",
    link: "https://legalyze-ai.vercel.app/",
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "OpenAI Agents SDK",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Better Auth",
    ],
    tier: 1,
  },
  {
    name: "Cognita",
    image: "/work/cognita-learn.png",
    category: "Agentic RAG",
    description:
      "A learning platform where the agent decides when to search course content. Learner onboarding data personalizes responses across a Next.js portal, Docusaurus textbook, FastAPI AI service, and Qdrant vector-search pipeline.",
    link: "https://cognitalearn.vercel.app/",
    stack: [
      "Next.js",
      "FastAPI",
      "OpenAI Agents SDK",
      "Qdrant",
      "Gemini Embedding",
      "NeonDB",
      "Docusaurus",
    ],
    tier: 1,
  },
  {
    name: "Personal AI Employee",
    image: null,
    noImage: true,
    isPrivate: true,
    category: "AI Agent",
    description:
      "An AI employee with inbox watchers, human approval via Telegram, and Odoo ERP integration through MCP. Monitors messages, drafts actions, and executes approved work.",
    link: null,
    stack: ["OpenAI Agents SDK", "MCP", "FastAPI", "n8n", "Odoo"],
    tier: 1,
  },
];

export const clientProjects = [
  {
    name: "UK Healthcare Booking Platform",
    category: "Client Delivery",
    noImage: true,
    isPrivate: true,
    image: null,
    description:
      "Delivered a booking and care-management platform from stakeholder conversations through deployment: role-based authentication, user and carer dashboards, booking workflows, location search, transactional email, and PostgreSQL data design. Provided documentation and operational handover.",
    link: null,
    stack: [
      "Role-Based Auth",
      "PostgreSQL",
      "Booking Workflows",
      "Transactional Email",
    ],
  },
  {
    name: "Lead-Screening Website Integration",
    category: "Client Integration",
    noImage: true,
    isPrivate: true,
    image: null,
    description:
      "Integrated a custom lead-screening questionnaire into an existing GoDaddy website, automating capture and email delivery within the client’s infrastructure, with documentation and handover.",
    link: null,
    stack: [
      "GoDaddy",
      "Website Integration",
      "Lead Screening",
      "Email Automation",
    ],
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
export const projectData = [
  ...tier1Projects,
  ...clientProjects,
  ...tier2Projects,
];

// Subset for homepage carousel — Tier 1 first, then top Tier 2
export const projectData2 = [
  ...tier1Projects,
  ...clientProjects,
  ...tier2Projects,
];
