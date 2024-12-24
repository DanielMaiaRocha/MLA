"Use client";
import Image from "next/image";
import React, { useState } from "react";
import PartnersCardd from "./PartnersCard";
import PartnersTag from "./PartnersTag";

const projectsData = [
  {
    id: "1",
    title: "Alcateia",
    country: "Brasil",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
  {
    id: "2",
    title: "Dubsol",
    country: "Wordwide/web",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
  {
    id: "3",
    title: "Dubber",
    country: "Wordwide/web",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
];

export const Creations = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white"
      id="About"
    >
      <h5 className="text-[#9A9A9A]">|MLA creations</h5>
      <h1 className="text-5xl font-bold">
        Some<span className="text-[#E6C88A]"> creations</span>
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-14">
        {filteredProject.map((project) => (
          <PartnersCardd
            key={project.id}
            title={project.title}
            country={project.country}
            imgUrl={project.image}
            previewURL={project.previewURL}
          />
        ))}
      </div>
    </div>
  );
};
