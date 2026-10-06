import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import SkillsMarquee from "./skills-marquee";

const info = [
  { icon: <User2 size={20} />, text: "Abdul Samad Siddiqui" },
  { icon: <HomeIcon size={20} />, text: "Karachi, Pakistan" },
  { icon: <MailIcon size={20} />, text: "abdulsamadwork109@gmail.com" },
  {
    icon: <Briefcase size={20} />,
    text: "AI engineering roles & client engagements",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BS Computer Science — Virtual University",
  },
];

const qualifications = [
  {
    title: "Education",
    data: [
      {
        school: "Virtual University of Pakistan",
        qualification: "BS Computer Science",
        year: "Sep 2026 – Present",
      },
      {
        school: "Jinnah Govt. College, Karachi",
        qualification: "Computer Science",
        year: "May 2024 – May 2026",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "Independent Contracts",
        role: "Forward-Deployed Full-Stack & AI Developer",
        qualification: "Remote",
        year: "Nov 2025 – Present",
        description:
          "Owned discovery, architecture, delivery, production debugging, and stakeholder iteration for a UK healthcare booking platform. Integrated lead screening into an existing GoDaddy website and handed over deployed systems and operational documentation.",
      },
      {
        Company: "DevoticsLabs",
        role: "Full-Stack AI Developer",
        qualification: "Onsite",
        year: "Jun 2025 – Oct 2025",
        description:
          "Built Next.js/React features, Python/FastAPI APIs, authentication, databases, and third-party integrations. Integrated LLM APIs and supported deployment and production debugging.",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="pb-12 mt-20 lg:mt-0">
      <div className="container mx-auto">
        <h2 className="section-words mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <div className="w-full flex justify-center items-center">
            <Tabs
              defaultValue="Personal-Info"
              className="w-full max-w-[1000px] flex justify-center items-center flex-col"
            >
              <TabsList className=" grid justify-between place-items-center xl:grid-cols-3 xl:border dark:md:border-none lg:gap-x-14 gap-y-3">
                <TabsTrigger className="w-[162px]" value="Personal-Info">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="Qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="Skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Content */}
              <div className="text-lg mt-12 lg:mt-18 mx-4">
                {/* Personal Info */}
                <TabsContent value="Personal-Info">
                  <div className="flex justify-center items-center flex-col text-center xl:text-left">
                    <h3 className="h3 mb-4 text-center">Personal Info</h3>
                    <p className="subtitle w-auto mx-auto xl:mx-0 text-center">
                      Forward-Deployed AI Engineer building customer-facing AI
                      systems from business requirements. I work across
                      discovery, architecture, agents, APIs, data
                      infrastructure, and deployment, then iterate with
                      stakeholders on the production system. My work spans
                      multi-tenant AI SaaS, agentic RAG, and client platforms
                      built with Python, TypeScript, Next.js, FastAPI, and
                      PostgreSQL.
                    </p>
                    <div className="mt-6 max-w-2xl text-center">
                      <h4 className="font-semibold mb-2">Certifications</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Claude Academy: AI Fluency — Framework and Foundations,
                        Claude 101, Claude Code 101; Understanding Agentic AI —
                        Agent Academy.AI.
                      </p>
                    </div>
                    {/* Icons */}
                    <div className="grid xl:place-items-start grid-cols-2 text-wrap text-center gap-x-10 gap-y-4 mb-12 mt-10">
                      {info.map((items, index) => (
                        <div className="flex gap-x-2 text-center" key={index}>
                          <div className=" text-primary">{items.icon}</div>
                          <div className="break-words break-all text-xs lg:text-sm text-center">
                            {items.text}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <p className="text-primary h4">Language Skills</p>
                      <div className="border-b border-border dark:border-white"></div>
                      <p className="text-base">English, Urdu, Hindi</p>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification */}
                <TabsContent value="Qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center">My Journey</h3>
                    {/* education & experience */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-primary text-[22px]">
                          <Briefcase />
                          <h4 className="h4 text-medium capitalize">
                            {getData(qualifications, "Experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="mt-8 ">
                          {getData(qualifications, "Experience").data.map(
                            (item, index) => {
                              const { Company, year, role, qualification } =
                                item;
                              return (
                                <div className="group" key={index}>
                                  <div className="font-semibold text-xl relative leading-snug mb-2">
                                    <div className="bg-orange-600  w-[10px] h-[10px] rounded-full absolute left-[-35px] z-10 transition-all duration-500 top-1/2 -translate-y-1/2 group-hover:top-[85px]"></div>
                                    <div className="h-[75px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
                                    {Company}
                                  </div>
                                  <div className="text-lg font-medium leading-snug mb-4">
                                    {role}
                                    {" - "}
                                    <span className="text-base text-muted-foreground">
                                      {qualification}
                                    </span>
                                  </div>
                                  <div className="text-base text-muted-foreground mb-4">
                                    {year}
                                  </div>
                                  {item.description && (
                                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-8">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-primary text-[22px]">
                          <GraduationCap />
                          <h4 className="h4 text-medium capitalize">
                            {getData(qualifications, "Education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="mt-8">
                          {getData(qualifications, "Education").data.map(
                            (item, index) => {
                              const { school, year, qualification } = item;
                              return (
                                <div className="group" key={index}>
                                  <div className="font-semibold text-xl relative leading-snug mb-2">
                                    <div className="bg-orange-600  w-[10px] h-[10px] rounded-full absolute left-[-35px] z-10 transition-all duration-500 top-1/2 -translate-y-1/2 group-hover:top-[85px]"></div>
                                    <div className="h-[75px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
                                    {school}
                                  </div>
                                  <div className="text-lg font-medium leading-snug mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base text-muted-foreground mb-4">
                                    {year}
                                  </div>
                                  {item.description && (
                                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-8">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value="Skills">
                  <div className="text-center">
                    <SkillsMarquee
                      topRowDuration={30}
                      bottomRowDuration={35}
                      mobileTopRowDuration={20}
                      mobileBottomRowDuration={25}
                    />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
