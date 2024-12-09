import React from "react";
import Image from "next/image";

const trending = () => {
  const trendingProducts = [
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproduct/chair1.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproduct/chair2.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproduct/chair3.png",
    },
    {
      name: "Comfort Handy Craft",
      price: "26.00",
      originalPrice: "42.00",
      image: "/trendingproduct/chair4.png",
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="bg-pink-50 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-pink-500 mb-2">
            51% off on all products
          </h2>
          <a href="#" className="text-pink-600 font-semibold">
            Shop Now
          </a>
        </div>
        <div className="bg-pink-50 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-bold text-pink-500 mb-2">
            51% off on all products
          </h2>
          <a href="#" className="text-pink-600 font-semibold">
            Shop Now
          </a>
        </div>
      </section>

      {/* Side Product List */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {["/trendingproduct/lamp.png", "/trendingproduct/shelf.png", "/trendingproduct/chair5.png"].map(
          (image, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg p-4"
            >
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
              <div className="ml-4">
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



<section className="py-16 bg-white">
<div className="max-w-6xl mx-auto flex flex-wrap items-center gap-10 px-6">
  {/* Left Content */}
  <div className="flex-1">
 

<div className="container mx-auto px-4 py-8  " style={{ backgroundColor: "white" }}>
  <h1 className="text-3xl font-bold text-center mb-8">Latest Products</h1>
  <div className="flex justify-center space-x-8  text-[#151875]">
    <a href="#" className="text-[#FB4997] font-semibold">
      Wood Chair
    </a>
    <a href="#" className="hover:text-[#FB4997]">Plastic Chair</a>
    <a href="#" className="hover:text-[#FB4997]">Sofa Collection</a>
    </div>
    </div>
    </div>
  </div>
</section>








export default trending;



