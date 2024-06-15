"use client";

import useWixClient from "@/hooks/useWixClient";
import Image from "next/image";
import React, { useEffect } from "react";

export default function CartModal() {
  const cartItems = true;

  const wixClient = useWixClient();

  useEffect(() => {
    const getCart = async () => {
      const response = await wixClient.currentCart.getCurrentCart();
    };
    getCart();
  }, [wixClient]);

  return (
    <div className="w-max text-black absolute p-4 rounded-md bg-white shadow-gray-400 shadow-lg border border-orange top-12 right-0 z-20 flex flex-col gap-6">
      {!cartItems ? (
        <div>
          <p>Cart is Empty</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          {/* List */}
          <div className="flex flex-col gap-8">
            {/* Item 1 */}
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
                  <p className="text-blue-500 text-sm font-semibold">Remove</p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
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
                  <button className="text-blue-500 text-sm font-semibold">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div className="w-full border-t py-1 border-orange"></div>
          <div>
            <div className="flex items-center justify-between font-semibold">
              <p className="">Subtotal</p>
              <p className="">$49</p>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at Checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-orange font-bold shadow-gray-400 shadow-md">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 text-white bg-orange font-bold shadow-gray-400 shadow-md">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
