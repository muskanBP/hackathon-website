'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoSearch, IoMenu, IoClose } from 'react-icons/io5';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Navbar Header */}
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-4 border-b border-gray-300">
        {/* Logo */}
        <h2 className="font-bold text-3xl text-black">Hekto</h2>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`fixed top-0 left-0 h-full w-3/4 bg-white z-50 p-6 transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:static md:flex md:flex-row md:items-center md:w-auto md:gap-6 md:p-0 md:translate-x-0`}
        >
          <li className="mt-4 md:mt-0">
            <Link
              href="/"
              className="font-bold text-black hover:text-pink-500"
              onClick={() => setMenuOpen(false)} // Close menu when a link is clicked
            >
              Home
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            <Link
              href="/pages"
              className="font-bold text-black hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Pages
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            <Link
              href="/Products"          
              className="font-bold text-black hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            <Link
              href="/Blog"
              className="font-bold text-black hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
            <Link
              href="/Shop"
              className="font-bold text-black hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li className="mt-4 md:mt-0">
          <Link href="/contactus"
              
              className="font-bold text-black hover:text-pink-500"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Search and Options */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-pink-500 text-white rounded px-4 py-2 flex items-center gap-2">
            <IoSearch />
          </button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)} // Close menu when clicking outside
        ></div>
      )}
    </div>
  );
};

export default Navbar;
