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
      The Media Localization Alliance (MLA) is a global non-profit organization that brings together around 50 TPN-certified dubbing studios to form a collaborative network. Its goal is to foster connections, mutual growth, and the adoption of innovative technologies. Members benefit from studio rental discounts, project promotion, idea exchange, and in-person meetings funded by the organization. MLA also showcases news and productions from member studios. By promoting digital transformation and compliance with industry standards, MLA aims to strengthen the group's presence in the global localization market.
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
