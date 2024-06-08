"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [isHovered]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-full flex transition-transform ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            className="w-full flex-shrink-0 h-64 md:h-80 lg:h-96 2xl:h-[650px] flex flex-col items-center justify-center relative"
            key={slide.id}
          >
            {/* Image Container */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.img}
                alt="image"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            {/* Text container */}
            <div className="relative z-10 text-center bg-black bg-opacity-50 m-4 p-6 rounded-md">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl text-white">
                {slide.description}
              </h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-semibold text-white">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="mt-4 rounded-md py-1 px-2 md:py-3 md:px-4 bg-orange font-bold shadow-black shadow-md uppercase text-white bg-orange-500">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 opacity-0 transform -translate-y-1/2 bg-transparent "
        onClick={handlePrev}
      >
        <IoIosArrowBack className="text-9xl" />
      </button>
      <button
        className="absolute top-1/2 right-4 opacity-0 transform -translate-y-1/2 bg-transparent "
        onClick={handleNext}
      >
        <IoIosArrowForward className="text-9xl" />
      </button>
    </div>
  );
}
