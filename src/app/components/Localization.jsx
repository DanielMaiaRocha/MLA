"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Partners",
    value: "50",
    postfix: "+",
  },
  {
    metric: "Countries",
    value: "40",
    postfix: "+",
  },
  {
    metric: "years",
    value: "1",
  },
];

const Localization = () => {
  return (
    <div className="py-8 px-4 xl:gap sm:py-16 xl:px-16 flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white">
      <h5 className="text-[#9A9A9A]">| MLA Range</h5>
      <h1 className="text-5xl font-bold">
        Where <span className="text-[#E6C88A]">we</span> at?
      </h1>
      <div className="sm:border-[#E6C88A] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
      <h2 className="flex mt-10 max-w-[44rem] text-center p-4 font-medium">
          The Media Localization Alliance (MLA) unites leading dubbing studios
          from around the world to bring stories to life across languages and
          cultures. With a presence in key countries renowned for dubbing, MLA
          fosters collaboration and excellence, ensuring high-quality
          localization, compliance with content securities best practices that
          resonates with global audiences. Together, we break barriers and
          connect creators with viewers worldwide.
        </h2>
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

export default Localization;
