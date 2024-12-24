"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../header";  // Ensure Header is correctly imported
import Link from "next/link";    // Import Next.js Link component

// Define the types for Cart Item
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
};

// Mock cart products data (for illustration)
const Products: CartItem[] = [
  {
    id: 1,
    name: "Product 1",
    price: 30,
    quantity: 2,
    color: "Red",
    size: "M",
    image: "/images/cashback 1.png", // Updated image filename
  },
  {
    id: 2,
    name: "Product 2",
    price: 45,
    quantity: 1,
    color: "Blue",
    size: "L",
    image: "/images/premium-quality 1.png", // Updated image filename
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(Products);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      {/* Header section */}
      <Header />

      <div className="p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cart Items Table */}
        <div className="lg:col-span-2">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base md:text-lg">
                  Product
                </th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base md:text-lg">
                  Price
                </th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base md:text-lg">
                  Quantity
                </th>
                <th className="p-4 border text-[#1D3178] text-xs sm:text-base md:text-lg">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="p-4 border flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={500}
                      height={500}
                      className="w-16 h-16 rounded-lg object-cover cursor-pointer"
                    />
                    <div>
                      <p
                        className="font-semibold text-[#1D3178] text-xs sm:text-base md:text-lg cursor-pointer"
                      >
                        <Link href={`/product/${item.id}`} target="_blank">
                          {item.name}
                        </Link>
                      </p>
                      <p className="text-sm text-gray-500 text-xs sm:text-sm md:text-base">
                        Color: {item.color}, Size: {item.size}
                      </p>
                    </div>
                  </td>
                  <td className="p-4 border text-[#1D3178] text-xs sm:text-base md:text-lg">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="p-4 border">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      className="w-16 px-2 py-1 border rounded-md text-xs sm:text-sm md:text-base"
                      min="1"
                    />
                  </td>
                  <td className="p-4 border text-[#1D3178] text-xs sm:text-base md:text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4 flex-wrap">
            <button className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm md:text-base">
              Update Cart
            </button>
            <button className="px-4 py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm md:text-base">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="p-6 bg-gray-50 rounded-md shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#1D3178] text-xs sm:text-xl md:text-2xl">
              Cart Totals
            </h2>
            <p className="flex justify-between mb-2 text-[#1D3178] text-xs sm:text-sm md:text-base">
              <span>Subtotal:</span> <span>${calculateTotal().toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-4 text-[#1D3178] text-xs sm:text-sm md:text-base">
              <span>Totals:</span>{" "}
              <span>${(calculateTotal() + 15).toFixed(2)}</span>
            </p>
            <button className="w-full py-2 bg-[#19D16F] text-white rounded-md text-xs sm:text-sm md:text-base">
              Proceed To Checkout
            </button>
          </div>

          {/* Shipping Calculator */}
          <div className="p-6 bg-gray-50 rounded-md shadow-md mt-6">
            <h2 className="text-xl font-bold mb-4 text-[#1D3178] text-xs sm:text-xl md:text-2xl">
              Calculate Shipping
            </h2>
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full mb-3 px-3 py-2 border rounded-md text-xs sm:text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Mirpur, Dhaka - 1200"
              className="w-full mb-3 px-3 py-2 border rounded-md text-xs sm:text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full mb-4 px-3 py-2 border rounded-md text-xs sm:text-sm md:text-base"
            />
            <button className="w-full py-2 bg-[#FB2E86] text-white rounded-md text-xs sm:text-sm md:text-base">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Cart;
