"use client";

import React from "react";
import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import { SiFiverr, SiUpwork } from "react-icons/si";
import Link from "next/link";

const Social = ({ iconsStyle, containerStyles }) => {
  const sociallinks = [
    {
      path: "https://github.com/AbdulSamad94",
      icon: <RiGithubFill />,
      label: "GitHub",
    },
    {
      path: "https://www.linkedin.com/in/abdul-samad-siddiqui-0183012b5/",
      icon: <RiLinkedinFill />,
      label: "LinkedIn",
    },
    {
      path: "https://www.instagram.com/abdul.samad.ai",
      icon: <RiInstagramFill />,
      label: "Instagram",
    },
    {
      path: "https://www.upwork.com/freelancers/~0111be282ff319fcf5",
      icon: <SiUpwork />,
      label: "Upwork",
    },
    {
      path: "https://www.fiverr.com/abdulsamadgamin",
      icon: <SiFiverr />,
      label: "Fiverr",
    },
  ];

  return (
    <div className={containerStyles ?? "flex justify-center xl:justify-start gap-x-5"}>
      {sociallinks.map((link, index) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          href={link.path}
          className={iconsStyle}
          aria-label={link.label}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
