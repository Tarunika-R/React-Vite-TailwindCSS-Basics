import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black-900 text-white py-6 px-5 font-mazzard">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3 px-4 md:px-16">
          <img src="/icons/l0.png" alt="NajmAI logo" className="w-10 h-10 object-contain"
          />
          <h1 className="text-xl font-bold">NajmAI</h1>
        </div>

          {/* Hamburger Menu Icon (Always Visible) */}
          <div className="flex items-center space-x-5 md:px-16 text-sm md:text-lg ">
            <a href="#home" className="hover:font-semibold">
              More Templates
            </a>
            <button
              className="bg-gray-800 text-white p-2 rounded focus:outline-none hover:bg-gray-600"
              style={{ backgroundColor: "#272829" }}
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            </button>
          </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <div className="bg-gray-800 text-white p-4 mt-2"
        style={{ backgroundColor: "#272829" }}>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
