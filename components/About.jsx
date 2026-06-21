import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

import SkillsMarquee from "./skills-marquee";

const info = [
  {
    icon: <User2 size={20} />,
    text: "Abdul Samad Siddiqui",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Karachi, Pakistan",
  },
  {
    icon: <MailIcon size={20} />,
    text: "abdulsamadwork109@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born Feb 11, 2008",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "GIAIC — AI-201 → AI-202 → AI-301",
  },
  {
    icon: <Briefcase size={20} />,
    text: "Available for freelance",
  },
];

const qualifications = [
  {
    title: "Education",
    data: [
      {
        school: "Jinnah Govt. Boys College",
        qualification: "Higher Secondary (HSC) — Computer Science",
        year: "2024 - Present",
      },
      {
        school: "Bilal Public School",
        qualification: "Secondary School Certificate (SSC) — Computer Science",
        year: "2022 - 2024",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        Company: "Freelance — Fiverr",
        role: "Agentic AI Developer",
        qualification: "Available for hire",
        year: "2024 - Present",
      },
      {
        Company: "GIAIC — Governor's Initiative",
        role: "Cloud-Native Agentic AI Developer",
        qualification: "AI-201 → AI-202 → AI-301",
        year: "2024 - Present",
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
              className="w-[800px] flex justify-center items-center flex-col"
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
                      Self-taught Agentic AI Developer from Karachi, Pakistan.
                      I build production-grade multi-agent systems and
                      full-stack applications for international clients.
                      Currently on the GIAIC Cloud-Native Agentic AI Developer
                      roadmap, working with OpenAI Agents SDK, Claude Agent
                      SDK, FastAPI, and RAG pipelines. Available for freelance
                      — agentic AI systems, full-stack apps, and n8n automation.
                    </p>
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
                    <div className="flex flex-col justify-between lg:flex-row gap-x-28">
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
                                  <div className="font-semibold text-xl relative leading-none mb-2">
                                    <div className="bg-orange-600  w-[10px] h-[10px] rounded-full absolute left-[-35px] z-10 transition-all duration-500 top-1/2 -translate-y-1/2 group-hover:top-[85px]"></div>
                                    <div className="h-[75px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
                                    {Company}
                                  </div>
                                  <div className="text-lg font-medium leading-none mb-4">
                                    {role}
                                    {" - "}
                                    <span className="text-base text-muted dark:text-white">
                                      {qualification}
                                    </span>
                                  </div>
                                  <div className="text-base text-muted-foreground mb-10">
                                    {year}
                                  </div>
                                </div>
                              );
                            }
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
                                  <div className="font-semibold text-xl relative leading-none mb-2">
                                    <div className="bg-orange-600  w-[10px] h-[10px] rounded-full absolute left-[-35px] z-10 transition-all duration-500 top-1/2 -translate-y-1/2 group-hover:top-[85px]"></div>
                                    <div className="h-[75px] w-[2px] bg-slate-300 absolute top-[15px] -left-[31px]"></div>
                                    {school}
                                  </div>
                                  <div className="text-lg font-medium leading-none mb-4">
                                    {qualification}
                                  </div>
                                  <div className="text-base text-muted-foreground mb-10">
                                    {year}
                                  </div>
                                </div>
                              );
                            }
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
