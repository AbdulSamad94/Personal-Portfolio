import "./globals.css";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/chatbot/chat";
import Script from "next/script";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abdul Samad Siddiqui | Full Stack AI Agent Developer — Karachi",
    template: "%s | Abdul Samad Siddiqui",
  },
  description:
    "Abdul Samad Siddiqui is a Full Stack AI Agentic Developer from Karachi, Pakistan. Building production-grade multi-agent systems, RAG pipelines, and full-stack apps with OpenAI Agents SDK, Claude Agent SDK, Next.js, and FastAPI.",
  keywords: [
    "Abdul Samad Siddiqui",
    "Full Stack AI Agent Developer",
    "AI Agent Developer",
    "Full Stack AI Agentic Developer",
    "Agentic AI Developer",
    "AI Developer Pakistan",
    "AI Developer Karachi",
    "OpenAI Agents SDK developer",
    "Claude Agent SDK",
    "Next.js developer",
    "FastAPI developer",
    "multi-agent systems",
    "RAG pipeline developer",
    "n8n automation",
    "freelance AI developer",
  ],
  authors: [{ name: "Abdul Samad Siddiqui", url: siteUrl }],
  creator: "Abdul Samad Siddiqui",
  publisher: "Abdul Samad Siddiqui",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abdul Samad Siddiqui",
    title: "Abdul Samad Siddiqui | Full Stack AI Agent Developer",
    description:
      "18yo Full Stack AI Agentic Developer from Karachi building production-grade multi-agent systems and full-stack apps for clients across the UK, US, and UAE.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Samad Siddiqui — Full Stack AI Agent Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Samad Siddiqui | Full Stack AI Agent Developer",
    description:
      "18yo Full Stack AI Agentic Developer from Karachi building production-grade multi-agent systems and full-stack apps.",
    images: ["/og-image.png"],
    creator: "@abdulsamad_ai",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Samad Siddiqui",
  url: siteUrl,
  image: `${siteUrl}/hero/myPic.png`,
  sameAs: [
    "https://github.com/AbdulSamad94",
    "https://www.linkedin.com/in/abdul-samad-siddiqui-0183012b5/",
    "https://www.fiverr.com/abdulsamadgamin",
    "https://www.upwork.com/freelancers/~0111be282ff319fcf5",
  ],
  jobTitle: "Full Stack AI Agent Developer",
  description:
    "Self-taught Full Stack AI Agentic Developer from Karachi, Pakistan. Building production-grade multi-agent systems, RAG pipelines, and full-stack applications using OpenAI Agents SDK, Claude Agent SDK, Next.js, and FastAPI.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Agentic AI",
    "Multi-Agent Systems",
    "OpenAI Agents SDK",
    "Claude Agent SDK",
    "Next.js",
    "FastAPI",
    "RAG Pipelines",
    "n8n Automation",
    "TypeScript",
    "Full Stack Development",
  ],
  email: "abdulsamadwork109@gmail.com",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abdul Samad Siddiqui",
  url: siteUrl,
  description:
    "Portfolio of Abdul Samad Siddiqui — Full Stack AI Agent Developer from Karachi, Pakistan.",
  author: {
    "@type": "Person",
    name: "Abdul Samad Siddiqui",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
        </Script>
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={outfit.className}>
        <ThemeProvider attributes="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Chat />
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
