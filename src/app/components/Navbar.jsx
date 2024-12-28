import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20 bg-transparent">
      <div className="py-5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#Hero">
              <img
                src="/images/mla.png"
                alt="Saas Logo"
                height="30"
                width="200"
              />
            </a>

            {/* Mobile Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:hidden text-white cursor-pointer"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-white items-center">
              <a href="#About" className="hover:text-[#E6C88A]">
                About
              </a>
              <a href="#Members" className="hover:text-[#E6C88A]">
                Members
              </a>
              <a href="#News" className="hover:text-[#E6C88A]">
                News
              </a>
              <a href="#LinkedIn" className="hover:text-[#E6C88A]">
                LinkedIn
              </a>
              <a href="#Help" className="hover:text-[#E6C88A]">
                Help
              </a>
              <a
                href="/login"
                className="bg-[#E6C88A] text-white px-4 py-2 rounded-lg font-medium"
              >
                Login
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar