import Add from '@/components/Add';
import CustomizeProducts from '@/components/CustomizeProducts';
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
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          assumenda perspiciatis vero in, possimus ut fugit sed mollitia unde.
          Cupiditate ipsa recusandae sequi rem ducimus repudiandae velit porro
          nisi quas.
        </p>
        <div className="h-[2px] bg-orange/10" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-orange/10" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-orange/10" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia est ut. Ipsa ducimus repudiandae accusamus incidunt sed.
            Totam aspernatur saepe facere est reprehenderit omnis cumque
            excepturi ipsa, sunt veritatis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia est ut. Ipsa ducimus repudiandae accusamus incidunt sed.
            Totam aspernatur saepe facere est reprehenderit omnis cumque
            excepturi ipsa, sunt veritatis.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            officia est ut. Ipsa ducimus repudiandae accusamus incidunt sed.
            Totam aspernatur saepe facere est reprehenderit omnis cumque
            excepturi ipsa, sunt veritatis.
          </p>
        </div>
      </div>
    </div>
  );
}
