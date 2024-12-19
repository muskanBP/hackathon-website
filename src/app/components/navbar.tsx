'use client';
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume, FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden sm:flex bg-[#7E33E0] text-[#f1f1f1] h-[44px] items-center justify-center">
        <div className="max-w-[1200px] w-full flex justify-between items-center px-4">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MdOutlineEmail className="text-white w-4 h-4" />
              <a href="mailto:mhhasanul@gmail.com" className="text-sm font-semibold">
                mhhasanul@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneVolume className="text-white w-4 h-4" />
              <a href="tel:(12345)67890" className="text-sm font-semibold">
                (12345)67890
              </a>
            </div>
          </div>

          {/* Right: User Options */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span>English</span>
              <FaChevronDown />
            </div>
            <div className="flex items-center gap-2">
              <span>USD</span>
              <FaChevronDown />
            </div>
            <div className="flex items-center gap-2">
              <span>
                <Link href="/my-app/Login">Login</Link>
              </span>
              <FiUser />
            </div>
            <div className="flex items-center gap-2">
              <span>Wishlist</span>
              <FaRegHeart />
            </div>
            <LuShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden bg-[#7E33E0] text-[#f1f1f1] py-2 px-4 flex items-center justify-between">
        {/* Left: Logo or Contact Button */}
        <div className="flex items-center gap-2">
          <MdOutlineEmail className="text-white w-5 h-5" />
          <a href="mailto:mhhasanul@gmail.com" className="text-sm font-semibold">
            Email Us
          </a>
        </div>

        {/* Right: Hamburger Menu (for user options) */}
        <div className="flex items-center gap-4">
          <FiUser className="text-white w-5 h-5" title="Login" />
          <FaRegHeart className="text-white w-5 h-5" title="Wishlist" />
          <LuShoppingCart className="text-white w-5 h-5" title="Cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
