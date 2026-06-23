import React from "react";
import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdul Samad Siddiqui — Full Stack AI Agent Developer available for freelance work in agentic AI systems, full-stack applications, and n8n automation.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | Abdul Samad Siddiqui",
    description:
      "Open to freelance work — agentic AI systems, full-stack applications, and n8n automation. Send a message and I'll get back promptly.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
  },
};

const ContactPage = () => {
  return (
    <section>
      <div className="px-2 lg:mx-auto container">
        {/* Text & Img */}
        <div className="grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-12 lg:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-lg text-primary mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="max-w-[400px] subtitle">
              Open to freelance work — agentic AI systems, full-stack
              applications, and n8n automation. If you have a project in mind,
              send a message and I will get back to you promptly.
            </p>
          </div>
          {/* Img */}
          <div className="hidden lg:flex w-full bg-contact-light dark:bg-contact-dark bg-no-repeat bg-contain bg-top"></div>
        </div>
        {/* Information & form */}
        <div className="grid lg:grid-cols-2 mb-24 lg:mb-32 text-base lg:text-lg">
          <div className="flex flex-col gap-y-4 lg:gap-y-12 mb-12 lg:mb-24">
            <div className="flex items-center gap-x-4">
              <MailIcon size={20} className="text-primary" />
              <p>abdulsamadwork109@gmail.com</p>
            </div>
            <div className="flex items-center gap-x-4">
              <HomeIcon size={20} className="text-primary" />
              <p>Karachi, Pakistan.</p>
            </div>
            <div className="flex items-center gap-x-4">
              <PhoneCall size={20} className="text-primary" />
              <p>+92 3132959809</p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
