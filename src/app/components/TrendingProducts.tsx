'use client';
import React from "react";
import Image from "next/image";

const trending = () => {
  const trendingProducts = [
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/images/box for image.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/images/box for image (1).png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/images/box for image (2).png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/images/box for image (3).png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Trending Products */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#151875] text-center mb-6">
            Trending Products
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200 relative"
              >
                {/* Product Image */}
                <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-gray-800 font-semibold mb-2">{product.name}</h3>
                <div className="text-gray-500">
                  <span className="text-blue-900 line-through mr-2">
                    ${product.originalPrice}
                  </span>
                  <span>${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
        {/* First Image Box */}
        <div
          className="w-full sm:w-[420px] h-[270px] bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/Group 154.png')",
          }}
        ></div>

        {/* Second Image Box */}
        <div
          className="w-full sm:w-[420px] h-[270px] bg-center bg-cove "
          style={{
            backgroundImage: "url('/images/Group 155.png')",
          }}
        ></div>
      </section>

      {/* Side Product List */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["/trendingproduct/lamp.png", "/trendingproduct/shelf.png", "/trendingproduct/chair5.png"].map(
          (image, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4"
            >
              <Image
                src={"/images/Trnding products list.png"}
                alt={`Product ${index + 1}`}
                width={80}
                height={80}
                className="object-contain mb-4 sm:mb-0"
              />
              <div className="sm:ml-4 text-center sm:text-left">
                <h3 className="text-gray-700 font-semibold">Essential Item</h3>
                <p className="text-gray-500 text-sm">Great for your home</p>
              </div>
            </div>
          )
        )}
      </section>

     
   
    </div>
  );
};

export default trending;
