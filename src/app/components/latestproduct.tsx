import React from "react";

const LatestProducts: React.FC = () => {
  const products = [
    {
      name: "Product 1",
      price: 42.0,
      originalPrice: 65.0,
      sale: true,
      imageUrl: "/images/box for image (1).png",
    },
    {
      name: "Product 2",
      price: 38.0,
      originalPrice: 50.0,
      sale: false,
      imageUrl: "/images/Frame 1.png",
    },
    {
      name: "Product 3",
      price: 55.0,
      originalPrice: 75.0,
      sale: true,
      imageUrl: "/images/Frame 1 (1).png",
    },
    {
      name: "Product 4",
      price: 40.0,
      originalPrice: 60.0,
      sale: false,
      imageUrl: "/images/image 1169.png",
    },
    {
      name: "Product 5",
      price: 48.0,
      originalPrice: 70.0,
      sale: true,
      imageUrl: "/images/box for image (3).png",
    },
    {
      name: "Product 6",
      price: 60.0,
      originalPrice: 80.0,
      sale: false,
      imageUrl: "/images/image 3 (1).png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-[#151875] text-center mb-10">
          Latest Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-200"
            >
              {/* Product Image */}
              <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-semibold mb-2">
                {product.name}
              </h3>
              <div className="text-gray-500">
                {product.sale && (
                  <span className="text-red-500 line-through mr-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span>${product.price.toFixed(2)}</span>
              </div>

              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  Sale
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
