import React from "react";
import Social from "./Social";
const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center">
          <Social
            iconsStyle="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
            containerStyles="flex justify-center gap-x-5 mb-4"
          />
          <p className="text-muted-foreground text-center">
            Copyright &copy; Abdul Samad. 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
