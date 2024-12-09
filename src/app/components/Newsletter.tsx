"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Redirecting to shop page...");
  };

  return (
    <div>
      {/* Newsletter Section */}
      <section
        className="newsletter flex flex-col items-center justify-center text-center py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your background image URL
        }}
      >
        <h1 className="text-2xl font-bold text-[#151875] mb-4">
          Get Latest Update By Subscribing
        </h1>
        <h1 className="text-2xl font-bold text-[#151875] mb-4">Our Newsletter</h1>
        <button
          onClick={handleButtonClick}
          className="bg-pink-500 text-white py-3 px-6 text-lg hover:bg-blue-700 transition"
        >
          Shop Now
        </button>
      </section>
{/* Image Section */}
<div className="flex justify-center items-center py-16">
  <Link href="/products/chair" className="text-center">
    <div className="flex justify-center items-center  ">
      <Image
        src="/images/icon.png" // Corrected image path
        alt="icon"
        width={800} // Increased width
        height={800} // Increased height

      />
    </div>
  </Link>
</div>
</div>
     
  );
};

export default Newsletter;
