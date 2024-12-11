import React, { useState } from 'react';
import Image from 'next/image';


const DiscountItem: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8  bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-[#151875]">Discount Items</h1>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 text-[#151875]">
        <a href="#" className="text-[#FB4997] font-semibold">Wood Chair</a>
        <a href="#" className="hover:text-[#FB4997]">Plastic Chair</a>
        <a href="#" className="hover:text-[#FB4997]">Sofa Collection</a>
      </div>

      {/* Discount Section */}
      <div className="flex flex-wrap items-center justify-center gap-8 p-6 bg-gray-100 rounded-lg mt-8">
        {/* Left Content */}
        <div className="max-w-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">20% Discount On All Products</h3>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-500">
            <li>Material expose like metals</li>
            <li>Simple neutral colours</li>
            <li>Clear lines and geometric figures</li>
            <li>Material expose like metals</li>
          </ul>
          <button className="mt-8 bg-pink-500 text-white px-6 py-3 rounded shadow-md hover:bg-pink-600">
            Shop Now
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <Image
            src="/images/tortuga-01-b 1.png"
            alt="Chair"
            width={400}
            height={400}
            className="rounded-full shadow-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

// Top Categories Section
const TopCateg: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const images = ['/images/img1.png', '/images/img2.png', '/images/img3.png', '/images/img4.png'];

  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-bold mb-12">Top Categories</h1>

      <div className="flex justify-center flex-wrap gap-16">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-56 h-56 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-6">
              <Image
                src={"/images/Frame 1 (1).png"}
                alt={`Category ${index + 1}`}
                width={224} // Adjust size to match Tailwind classes
                height={224}
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-[#151875]">Mini LCW Chair</p>
              <p className="text-lg text-[#151875]">$56.00</p>
            </div>

            {hovered === index && (
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-md">
                View Shop
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Combined Export
const CombinedComponent: React.FC = () => {
  return (
    <>
      <DiscountItem />
      <TopCateg />
    </>
  );
};


export default CombinedComponent;