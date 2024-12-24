import React from "react";
import Image from "next/image";
import Link from "next/link";

const Add: React.FC = () => {
  const products = [
    {
      name: "Product 1",
      price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "/images/free-delivery 1.png",
      link: "/product/1",
    },
    {
      name: "Product 2",
      price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "/images/cashback 1.png",
      link: "/product/2",
    },
    {
      name: "Product 3",
      price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "/images/premium-quality 1.png",
      link: "/product/3",
    },
    {
      name: "Product 4",
      price: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      image: "/images/24-hours-support 1.png",
      link: "/product/4",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
    {/* Shopex Offer Section */}
    <section className="text-center py-16">
      <h2 className="text-3xl font-bold text-[#151875] mb-10">
        What Shopex Offer!
      </h2>
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-md text-center transform hover:scale-105"
          >
            <div className="mb-4">
              {/* Circle with Background and Image */}
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300">
                <Link href={product.link}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-full cursor-pointer"
                  />
                </Link>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  
  

      {/* Lower Section */}
      <section className="bg-[#F2F0FF] py-10">
        <div className="flex flex-col md:flex-row items-center gap-10 px-6">
          {/* Product Image */}
          <div className="flex-1 w-full md:w-1/2 order-1">
            <Image
              src="/images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
              width={1000} // Natural width
              height={10} // Natural height
              layout="responsive"
              alt="Product"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 w-full md:w-1/2 text-center md:text-left order-2">
            <h3 className="text-xl font-bold text-[#151875] mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="text-gray-700 space-y-2 pl-5">
              <li className="list-none relative pl-6">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full"></span>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li className="list-none relative pl-6">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full"></span>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li className="list-none relative pl-6">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-pink-500 rounded-full"></span>
                Arms, backs, and seats are structurally reinforced.
              </li>
            </ul>
            <div className="mt-8">
              <button className="bg-pink-500 text-white py-2 px-6 rounded shadow-md hover:bg-[#151875]">
                Add To Cart
              </button>
              <p className="text-lg font-bold text-[#151875] mt-4">
                B&B Italian Sofa - $32.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Add;
