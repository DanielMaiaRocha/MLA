import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden bg-[url("/images/bg.png")] text-white'>
      <Navbar />
      <div className="text-center py-4 px-6 md:px-32 md:py-20">
        <h1 className="text-5xl sm:text-6xl md:text-[82px] font-bold">
          ML<span className="text-[#E6C88A]">A</span>
        </h1>
        <h3 className="max-w-[32rem] mx-auto text-center text-lg sm:text-md md:text-base mt-10 p-2">
          The{" "}
          <span className="text-[#E6C88A]">Media Localization Alliance</span>{" "}
          (MLA) is a global organization that unites industry leaders in
          dubbing, subtitling, and content localization. MLA ensures
          high-quality, culturally adapted media for audiences worldwide through
          collaboration and innovation.
        </h3>
      </div>
      <div className="mt-8">
        <div className="animate-bounce">
          <Image src={"/images/seta-baixo.svg"} width={40} height={40} alt="Seta para baixo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
