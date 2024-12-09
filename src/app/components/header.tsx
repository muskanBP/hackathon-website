'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RiArrowDownWideFill } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';

const Navbar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div>
      {/* Navbar Header */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto px-4 py-4 border-b border-gray-300">
        {/* Logo */}
        <h2 className="font-bold text-3xl text-black">Hekto</h2>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-black">
          <Link href="/" className="font-bold hover:text-pink-500">Home</Link>
          <Link href="/pages" className="font-bold hover:text-pink-500">Pages</Link>
          <Link href="/products" className="font-bold hover:text-pink-500">Products</Link>
          <Link href="/blog" className="font-bold hover:text-pink-500">Blog</Link>
          <Link href="/shop" className="font-bold hover:text-pink-500">Shop</Link>
          <Link href="/contact" className="font-bold hover:text-pink-500">Contact</Link>
        </ul>

        {/* Search and Options */}
        <div className="flex items-center gap-4">
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
    </div>
  );
};

export default Navbar;
