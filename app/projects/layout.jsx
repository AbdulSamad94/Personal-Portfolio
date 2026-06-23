export const metadata = {
  title: "Projects",
  description:
    "Explore Abdul Samad Siddiqui's portfolio — production-grade AI agents, multi-agent systems, RAG pipelines, and full-stack applications built with Next.js, FastAPI, OpenAI Agents SDK, and Claude Agent SDK.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },
  openGraph: {
    title: "Projects | Abdul Samad Siddiqui",
    description:
      "Production-grade AI agents and full-stack applications — built for real users, deployed in the real world.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}
