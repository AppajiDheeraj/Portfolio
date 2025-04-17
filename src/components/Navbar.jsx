
"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="absolute top-0 right-0 p-6 md:p-10 z-10">
      {/* Mobile menu button */}
      <button className="md:hidden text-white p-2" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-50 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl text-[#b7ab98] font-avant1 tracking-wide ">
          <a href="#about" className="hover:text-gray-400 transition-colors">
            ABOUT
          </a>
          <a href="#skills" className="hover:text-gray-400 transition-colors">
            SKILLS
          </a>
          <a href="#work" className="hover:text-gray-400 transition-colors">
            WORK
          </a>
        </div>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex flex-col space-y-2 text-right text-[#b7ab98] font-avant1 tracking-[4px]">
        <li>
          <a href="#about" className="hover:opacity-80 transition-opacity duration-300">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:opacity-80 transition-opacity duration-300">
            SKILLS
          </a>
        </li>
        <li>
          <a href="#work" className="hover:opacity-80 transition-opacity duration-300">
            WORK
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar