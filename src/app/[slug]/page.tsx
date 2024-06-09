import ProductsImages from '@/components/ProductsImages'
import React from 'react'

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col md:flex-row gap-16">
      {/* Image */}
      <div className="w-full md:w-1/2 md:sticky top-20 h-max">
        <ProductsImages />
      </div>
      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">t</div>
    </div>
  );
}
