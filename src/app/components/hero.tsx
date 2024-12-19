'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "New Furniture Collection Trends in 2025",
    description:
      "Explore the perfect blend of style and functionality for your home decor.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa promotional header.png",
    lampImage: "/images/image-32.png",
  },
  {
    title: "Modern Chair Designs for Your Home",
    description:
      "Upgrade your living space with stunning modern furniture pieces.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa promotional header.png",
    lampImage: "/images/image-32.png",
  },
  {
    title: "Elegant Furniture for Every Space",
    description:
      "Discover timeless elegance with our curated furniture collection.",
    buttonText: "Shop Now",
    chairImage: "/images/sofa promotional header.png",
    lampImage: "/images/image-32.png",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const current = slides[currentSlide];

  return (
    <section className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-12 px-6 lg:px-12 flex flex-col items-center justify-center min-h-screen">
      {/* Container: Balanced margins and centered alignment */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto w-full gap-10">
        {/* Left Column: Lamp */}
        <div className="flex justify-center items-center w-full lg:w-1/3">
        <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 animate-bounce">

            <Image
              src={"/images/image 32.png"}
              alt="Lamp"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Column: Text Content */}
        <div className="w-full lg:w-1/3 text-center lg:text-center flex flex-col justify-center items-center">
          <p className="text-sm md:text-base text-pink-600 font-semibold tracking-wide uppercase">
            Best Furniture for Your Castle
          </p>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-4">
            {current.title}
          </h1>
          <p className="text-gray-600 text-base md:text-lg mt-4 leading-relaxed">
            {current.description}
          </p>
          <Link
            href="#"
            className="mt-6 bg-pink-600 text-white text-sm md:text-base font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all duration-300"
          >
            {current.buttonText}
          </Link>
        </div>

        {/* Right Column: Chair Image */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <div className="relative bg-gradient-to-r from-pink-200 to-purple-300 rounded-full p-6 md:p-8 lg:p-10 shadow-xl">
            <Image
              src={"/images/sofa promotional header.png"}
              alt="Furniture Chair"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentSlide === index
                ? "bg-pink-600 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
      >
        ❮
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
      >
        ❯
      </button>
    </section>
  );
}

export default HeroSection;
