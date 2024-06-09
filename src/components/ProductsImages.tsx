"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ProductsImages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="h-[500px] relative overflow-hidden rounded-md">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={img.id} className="flex-shrink-0 w-full h-full relative">
              <Image
                src={img.url}
                alt={`Image ${i + 1}`}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            key={img.id}
            className={`w-1/4 h-32 relative cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              i === index ? "border-4 border-orange rounded-md" : ""
            }`}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt={`Thumbnail ${i + 1}`}
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
