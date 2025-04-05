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
        The Media Localization Alliance
  
The Media Localization Alliance (MLA) is a free,  global non-profit organization with the vision of creating an information hub where Trusted Partner Network (TPN) members  operating TPN certified dubbing studios can access a collaborative network of nearly 50 studios from around the world, fostering closer connections and mutual growth opportunities.

MLA members will enjoy exclusive benefits such as discounts on studio rentals within the network, idea exchange, project promotion and participation in in-person meetings funded by the organization, held at least twice a year during industry trade shows like NAB, MIPCOM or IBC. Additionally, news about member studios and their productions will be featured every month on the MLA website and LinkedIn page.

MLA will serve as a valuable showcase for demonstrating the potential of new technologies that reduce costs and 
streamline operations, resulting in faster turnaround times and profitability.

A nucleus of TPN-certified studios compliant with MPAA standards (the vision), establishes a solid foundation for attracting major clients, therefore strengthening the group’s position in the global localization market. This concept is based on the premise that digital transformation is essential for the survival and growth of dubbing companies, their staff and production talent.

Through MLA, studios from around the world will have the opportunity to collaborate directly, breaking down barriers and joining forces to overcome challenges and meet the demands of the industry’s new reality.
      </h2>
    </div>
  );
};

export default AboutMla;
