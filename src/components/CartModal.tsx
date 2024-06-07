"use client"

import Image from 'next/image';
import React from 'react'

export default function CartModal() {

  const cartItems = true;
  return (
    <div className="w-max text-black absolute p-4 rounded-md bg-white shadow-gray-400 shadow-lg border border-orange top-12 right-0 z-20 flex flex-col gap-6">
      {!cartItems ? (
        <div>
          <p>Cart is Empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Item */}
          <div className="flex gap-4">
            <Image
              src="https://www.pexels.com/photo/bear-cub-walking-near-mother-7515368"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md border border-orange shadow-sm shadow-gray-500"
            />
            <div>
              {/* Top */}
              <div></div>
              {/* Title */}
              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <p className="p-1 bg-gray-200 rounded-sm">$49</p>
              </div>
              {/* Desc */}
              <div>
                <p className="text-xs bg-blue-200 text-blue-800 font-semibold rounded-md text-center my-1 w-max px-2 py-0.5">
                  Available
                </p>
              </div>
              {/* Bottom */}
              <div className="flex justify-between text-sm py-2">
                <p className="text-gray-700">Qty. 2</p>
                <p className="text-blue-500">Remove</p>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="flex gap-4">
            <Image
              src="https://www.pexels.com/photo/bear-cub-walking-near-mother-7515368"
              alt=""
              width={72}
              height={96}
              className="object-cover rounded-md border border-orange shadow-sm shadow-gray-500"
            />
            <div>
              {/* Top */}
              <div></div>
              {/* Title */}
              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <p className="p-1 bg-gray-200 rounded-sm">$49</p>
              </div>
              {/* Desc */}
              <div>
                <p className="text-xs bg-blue-200 text-blue-800 font-semibold rounded-md text-center my-1 w-max px-2 py-0.5">
                  Available
                </p>
              </div>
              {/* Bottom */}
              <div className="flex justify-between text-sm py-2">
                <p className="text-gray-700">Qty. 2</p>
                <p className="text-blue-500">Remove</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
