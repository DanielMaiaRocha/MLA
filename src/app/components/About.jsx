import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
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
        The Media Localization Alliance
  
The Media Localization Alliance (MLA) is a free,  global non-profit organization with the vision of creating an information hub where Trusted Partner Network (TPN) members  operating TPN certified dubbing studios can access a collaborative network of nearly 50 studios from around the world, fostering closer connections and mutual growth opportunities.
      </h2>
      <Link href={"/pages/about"} className="text-[#9A9A9A] underline">See more</Link>
      <div className="animate-bounce mt-10">
        <Image
          src={"/images/seta-baixo.svg"}
          width={40}
          height={40}
          alt="Seta para baixo"
        />
      </div>
    </div>
  );
};

export default About;
