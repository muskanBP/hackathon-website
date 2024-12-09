'use client';
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FiUser } from 'react-icons/fi';
import { FaChevronDown, FaRegHeart } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';

const Header = () => {
  return (
    <div className="hidden sm:block">
      <div className="bg-[#7E33E0] text-[#f1f1f1] h-[44px] flex items-center justify-center">
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
              <span>Login</span>
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
      
    </div>
  );
};

export default Header;
