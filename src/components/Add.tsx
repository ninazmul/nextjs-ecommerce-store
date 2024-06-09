"use client"

import React, { useState } from 'react'

export default function Add() {
  const [quantity, setQuantity] = useState(1);

  // temporary 
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="bg-orange/20 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className='cursor-pointer text-xl' onClick={()=> handleQuantity("d")}>-</button>
            <div className='border-x border-orange px-3'>{quantity}</div>
            <button className='cursor-pointer text-xl' onClick={()=> handleQuantity("i")}>+</button>
          </div>
          <div>
            <p className="text-xs text-center lg:text-start">
              Only <span className="text-orange font-semibold">{stock - quantity} items</span>{" "}
              left! <br />
              {"Don't"} miss it
            </p>
          </div>
        </div>
        <button className="rounded-2xl ring-1 ring-orange text-orange py-2 px-4 hover:bg-orange hover:text-white font-semibold transition-all duration-300 ease-in-out w-max disabled:cursor-not-allowed disabled:bg-orange/50 disabled:ring-orange/50 disabled:text-white/50">
          Add to Cart
        </button>
      </div>
    </div>
  );
}