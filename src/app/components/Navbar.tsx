"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Home
        </Link>
        <div className="mobile-menu block md:hidden">
          {!isMenuOpen ? (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars className="h-6 w-6 text-white" />
            </button>
          ) : (
            <button
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <FaTimes className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink key={index} href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMenuOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}

export default Navbar;
