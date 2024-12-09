import React from "react";

const add: React.FC = () => {
  const products = [
    {
      name: "Product 1",
      originalPrice: "50.00",
      price: "35.00",
      image: "/images/product1.png", // Replace with actual image paths
    },
    {
      name: "Product 2",
      originalPrice: "60.00",
      price: "45.00",
      image: "/images/product2.png",
    },
    {
      name: "Product 3",
      originalPrice: "40.00",
      price: "30.00",
      image: "/images/product3.png",
    },
    {
      name: "Product 4",
      originalPrice: "70.00",
      price: "55.00",
      image: "/images/product4.png",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Shopex Offer Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-[#151875] mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-orange-200 rounded-full flex items-center justify-center text-lg text-orange-600 font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  24/7 Support
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            ))}
        </div>
      </section>


      {/* Lower Section */}
      <section className="bg-[#F2F0FF]   h-[350px]">
        <div className="p-[64px]  flex flex-wrap md:flex-nowrap items-center gap-10 px-6">
          <div className="flex-1">
            {/* Product Image */}
            <img
              src="/sofa.jpg"
              alt="Product"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#151875] mb-4">
              Unique Features Of Latest & 
            </h3>
            <h3 className="text-xl font-bold text-[#151875] mb-4 ">Trending Products</h3>
            <ul className="text-gray-700 space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8">
              <button className="bg-pink-500 text-white py-2 px-6 rounded shadow-md hover:bg-[#151875]">
                Add To Cart
              </button> B&B Italian Sofa - $32.00
              <p className="mt-2 text-sm text-gray-500">
               
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};




export default add;
