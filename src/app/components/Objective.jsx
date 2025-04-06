import Image from "next/image";
import Link from "next/link";
import React from "react";

const Objectives = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white"
      id="About"
    >
      <h5 className="text-[#9A9A9A]">|MLA objectives</h5>
      <h1 className="text-5xl font-bold">
         <span className="text-[#E6C88A]">Objectives</span>
      </h1>
      <h2 className="flex mt-10 max-w-[44rem] text-center p-4 font-medium">
      MLA will serve as a valuable showcase for demonstrating the potential of new technologies that reduce costs and 
streamline operations, resulting in faster turnaround times and profitability.
<br />
<br />
A nucleus of TPN-certified studios compliant with MPAA standards (the vision), establishes a solid foundation for attracting major clients, therefore strengthening the group’s position in the global localization market. This concept is based on the premise that digital transformation is essential for the survival and growth of dubbing companies, their staff and production talent.
<br />
<br />
Through MLA, studios from around the world will have the opportunity to collaborate directly, breaking down barriers and joining forces to overcome challenges and meet the demands of the industry’s new reality.
      </h2>
      <div className=" mt-10">
        <Image
          src={"/images/logodubsol.png"}
          width={330}
          height={80}
          alt="Seta para baixo"
        />
      </div>
    </div>
  );
};

export default Objectives;
