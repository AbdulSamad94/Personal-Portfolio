export const metadata = {
  title: "Projects",
  description:
    "Explore IronhausAI, LegalyzeAI, Cognita, and client-delivery work by Forward-Deployed AI Engineer Abdul Samad Siddiqui. AI agents, business integrations, and deployed platforms.",
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
