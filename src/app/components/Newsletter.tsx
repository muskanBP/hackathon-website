"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Page = () => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Redirecting to shop page...");
  };

  const products = [
    {
      id: 8,
      name: "Top essential Trends in 2021",
      image: "/images/Frame 3.png",
      readMore: true,
    },
    {
      id: 9,
      name: "Top essential Trends in 2021",
      image: "/images/2dcYhvbHV-M.png",
      readMore: true,
    },
    {
      id: 10,
      name: "Top essential Trends in 2021",
      image: "/images/Frame 3 (1).png",
      readMore: true,
    },
  ];

  return (
    <div>
      {/* Newsletter Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-16">
        <Image
          src="/images/Rectangle 102.png"
          alt="Newsletter Background"
          layout="fill" // Ensures the image takes up the full container
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10">
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
        </div>
      </section>

      {/* Icon Section */}
      <div className="flex justify-center items-center py-16">
        <Link href="/products/chair">
          <Image
            src="/images/icon.png"
            alt="Icon"
            width={800}
            height={800}
            className="object-contain"
          />
        </Link>
      </div>

       {/* Latest Products Sections */}
       <h2 className="text-2xl md:text-3xl font-bold text-[#151875] text-center mb-6">
        Latest Blog
      </h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 bg-[#f7f7f7] flex flex-col justify-between"
            >
              <div className="w-full h-[200px] sm:h-[250px] bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={370} // Added width and height for optimization
                  height={250}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="bg-white p-4 rounded-b-lg flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold mb-2 text-center sm:text-left">
                  {product.name}
                </h2>
                <div className="text-sm text-gray-700 mb-4">
                  <p>
                    More off this less hello samlande lied much over tightly
                    circa horse taped mightly
                  </p>
                </div>
                {product.readMore && (
                  <div className="mt-4 text-center sm:text-left">
                    <Link
                      href="/products/details"
                      className="text-blue-500 underline font-semibold"
                    >
                      Read More
                    </Link>
                  </div>
                )}
              </div>
            </div>
        
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
