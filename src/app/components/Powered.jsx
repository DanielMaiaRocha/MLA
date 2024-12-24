"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

// Variantes de animação para a seção "Powered"
const poweredVariants = {
  hidden: {
    opacity: 0,
    y: 50, // Inicialmente abaixo da posição final
  },
  visible: {
    opacity: 1,
    y: 0, // Animação subindo para a posição final
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 25,
    },
  },
};

const Powered = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-white"
      id="About"
      variants={poweredVariants} // Aplica as variantes de animação
      initial="hidden" // Começa no estado "hidden"
      whileInView="visible" // Anima para o estado "visible" quando entra na visualização
      viewport={{ once: true, amount: 0.5 }} // Configuração do ponto de visualização
    >
      <h5 className="text-[#9A9A9A] mb-10">|Powered MLA</h5>
      <h1 className="text-3xl font-bold ">
        Powered <span className="text-[#E6C88A]">By:</span>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileInView={{ opacity: 1 }} // A animação de opacidade começa ao entrar na visualização
        viewport={{ once: true, amount: 0.5 }}
      >
        <Image src={"/images/logodubsol.png"} width={450} height={150} alt="Logo Dubsol" />
      </motion.div>
      <motion.h2
        className="flex mt-7 max-w-[44rem] text-center p-4 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }} // A animação do texto começa ao entrar na visualização
        viewport={{ once: true, amount: 0.5 }}
      >
        Dubsol empowers dubbing studios, directors, and voice actors with
        advanced technology for remote recording and efficient collaboration.
        Specializing in high-quality localization and streamlined project
        management, Dubsol ensures flawless audio production from anywhere. With
        a focus on innovation and seamless workflows, Dubsol is transforming the
        way stories are brought to life in different languages and cultures,
        connecting creators with global audiences.
      </motion.h2>
      <Link href={"https://dubsol.vercel.app/"} className="text-[#9A9A9A] underline">
        See more
      </Link>
    </motion.div>
  );
};

export default Powered;
