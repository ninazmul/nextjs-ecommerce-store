"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Item {
  id: string;
  url: string;
  name?: string;
}

export default function ProductsImages({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [items.length]);

  return (
    <div>
      <div className="h-[500px] relative overflow-hidden rounded-md">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((img: Item) => (
            <div key={img.id} className="flex-shrink-0 w-full h-full relative">
              <Image
                src={img.url || "/product.png"}
                alt={img.name || "Product Image"}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {items.map((img: Item, i: number) => (
          <div
            key={img.id}
            className={`w-1/4 h-32 relative cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              i === index ? "border-4 border-orange rounded-md" : ""
            }`}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url || "/product.png"}
              alt={img.name || "Product Image"}
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
