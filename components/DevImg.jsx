import React from "react";
import Image from "next/image";

const DevImg = ({ imgSrc, containerStyles }) => {
  return (
    <div className={containerStyles}>
      <Image
        className="mt-8 pr-14"
        src={imgSrc}
        alt="Abdul Samad Siddiqui — Forward-Deployed AI Engineer"
        priority
        fill
        draggable={false}
      />
    </div>
  );
};

export default DevImg;
