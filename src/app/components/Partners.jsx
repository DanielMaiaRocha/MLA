"use client";
import React, { useState } from "react";
import PartnersCard from "./PartnersCard";
import PartnersTag from "./PartnersTag";

const projectsData = [
  {
    id: "1",
    title: "Alcateia",
    country: "Brasil",
    address:"Rua General Barbosa Lima 39",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
  {
    id: "3",
    title: "Alcateia",
    country: "Brasil",
    address:"Rua General Barbosa Lima 39",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
  {
    id: "2",
    title: "Alcateia",
    country: "Brasil",
    address:"Rua General Barbosa Lima 39",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
  {
    id: "4",
    title: "Alcateia",
    country: "Brasil",
    address:"Rua General Barbosa Lima 39",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
  {
    id: "5",
    title: "Alcateia",
    country: "Brasil",
    address:"Rua General Barbosa Lima 39",
    image: "/images/alcateia.jpg",
    tag: ["All", "Web", "Mobile"],
    previewURL: "https://alcateiaaudiovisual.com.br/",
  },
];

const Partners = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white">
      <h5 className="text-[#9A9A9A]">| MLA Partners</h5>
      <h1 className="text-5xl font-bold">
      <span className="text-[#E6C88A]">Our</span> Partner Infos
      </h1>
      <h2 className="text-xl mt-5 mb-10">Here you can see some off our partners and go to their website</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProject.map((project) => (
          <PartnersCard
            key={project.id}
            title={project.title}
            address={project.address}
            country={project.country}
            imgUrl={project.image}
            previewURL={project.previewURL}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default Partners;
