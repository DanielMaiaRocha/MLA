import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMla = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white"
      id="About"
    >
      <h5 className="text-[#9A9A9A]">|about MLA</h5>
      <h1 className="text-5xl font-bold">
        About <span className="text-[#E6C88A]">US</span>
      </h1>
      <h2 className="flex mt-10 max-w-[44rem] text-center p-4 font-medium">
        The Media Localization Alliance (MLA) unites leading dubbing studios
        from around the world to bring stories to life across languages and
        cultures. With a presence in key countries renowned for dubbing, MLA
        fosters collaboration and excellence, ensuring high-quality
        localization, compliance with content securities best practices that
        resonates with global audiences. Together, we break barriers and connect
        creators with viewers worldwide.
      </h2>
    </div>
  );
};

export default AboutMla;
