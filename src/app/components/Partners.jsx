"use client";
import React, { useState } from "react";
import PartnersCardd from "./PartnersCardd";

const projectsData = [
  {
    id: "1",
    title: "Alcateia",
    image: "/images/alcateia.jpg",
    description: "A project showcasing a pack of creative developers.",
    country: "Brazil",
    state: "São Paulo",
    tpnBadge: "gold",
    dolbyAtmos: true,
    siteURL: "https://react-site-alca.vercel.app",
    tag: ["All", "Brazil"],
  },
  {
    id: "2",
    title: "Voxx Studios",
    image: "/images/voxx.png",
    description: "is an award-winning dubbing studio connecting the world’s voices through our shared stories",
    country: "USA",
    state: "Califonia",
    tpnBadge: "gold",
    dolbyAtmos: true,
    siteURL: "https://www.voxxstudios.com/",
    tag: ["All", "USA"],
  },
  {
    id: "3",
    title: "Bravo",
    image: "/images/bravo.jpg",
    description: "Bravo Studios, based in Rio since 1998, offers localization and accessibility services in Portuguese, Spanish, and English for TV, film, and VOD, through a trusted network across the U.S. and Latin America.",
    country: "Brazil",
    state: "Rio de Janeiro",
    tpnBadge: "gold",
    dolbyAtmos: true,
    siteURL: "https://bravostudios.tv/pt/",
    tag: ["All", "Brazil"],
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className="py-8 px-4 xl:gap sm:py-16 xl:px-16 flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white">
      <h5 className="text-[#9A9A9A]">| MLA Members</h5>
      <h1 className="text-center text-4xl font-bold text-[#E6C88A]  mt-4">
        Members
      </h1>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 justify-between m-10 bg-repeat-none">
        {filteredProject.map((project) => (
          <PartnersCardd
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            country={project.country}
            state={project.state}
            tpnBadge={project.tpnBadge}
            dolbyAtmos={project.dolbyAtmos}
            siteURL={project.siteURL}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
