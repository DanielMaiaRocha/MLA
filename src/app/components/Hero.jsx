"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Definir as variantes para o efeito de entrada da esquerda
const textVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden bg-[url('/images/bg.png')] text-white">
      <motion.div
        className="absolute bottom-32 left-32 px-4"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold opacity-80">
          A Trusted Network for{" "}
          <span className="text-[#E6C88A]">Global</span> Audiovisual Localization
        </h1>
      </motion.div>
      <div className="absolute bottom-4 flex justify-center w-full">
        <div className="animate-bounce">
          <Image src={"/images/seta-baixo.svg"} width={40} height={40} alt="Seta para baixo" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
