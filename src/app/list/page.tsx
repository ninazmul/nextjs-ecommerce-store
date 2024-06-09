import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import Image from 'next/image';
import React from 'react'

export default function listPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Campaign */}
      <div className="bg-orange/10 flex flex-col md:flex-row justify-between h-max">
        <div className="md:w-2/3 flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 p-4 md:p-8">
          <h1 className="text-2xl md:text-4xl font-semibold md:leading-[48px] text-gray-700">
            Grab up to 50% off on<br />
            Selected Products
          </h1>
          <button className="rounded-3xl w-max ring-1 ring-orange text-white bg-orange py-1 md:py-2 px-2 md:px-4 hover:bg-white hover:text-orange font-semibold transition-all duration-300 ease-in-out">
            Buy Now
          </button>
        </div>
        <div className="relative md:flex-1">
          <Image src="/woman.png" alt="women" className="object-contain" fill />
        </div>
      </div>
      <Filter />
      {/* Products */}
      <h1 className='mt-12 text-xl font-semibold'>Shoes for You!</h1>
      <ProductList/>
    </div>
  );
}
