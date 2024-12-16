"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import Image from "next/image";

const sidebarVariants = {
  hidden: {
    x: "100%", // Inicialmente fora da tela à direita
    opacity: 0,
  },
  visible: {
    x: "0%", // Entra na tela pela direita
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="absolute top-0 left-0 w-full z-10 bg-transparent"
      >
        <div className="flex justify-between items-center mx-6 md:mx-10 py-4">
          {/* Logo */}
          <Image
            src="/images/mla.png"
            width={190}
            height={40}
            alt="MLA Logo"
            priority
          />

          {/* Menu Icon */}
          <Image
            src="/images/menu.svg"
            width={25}
            height={25}
            alt="Menu Icon"
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </motion.nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 right-0 h-screen w-36 max-w-xs bg-[#18294E] text-[#E6C88A] z-20 shadow-lg flex justify-center items-center"
        >
          <div className="flex flex-col h-full">
            {/* Close Icon */}
            <div className="flex justify-end p-2 mt-10">
              <Image
                src="/images/close.svg"
                width={25}
                height={25}
                alt="Close Icon"
                className="cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>

            {/* Sidebar Links */}
            <ul className="flex flex-col gap-6 p-6">
              <li className="hover:text-gray-400 cursor-pointer">Home</li>
              <li className="hover:text-gray-400 cursor-pointer">About</li>
              <li className="hover:text-gray-400 cursor-pointer">Services</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
