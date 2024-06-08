import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryList() {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide mt-12">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
        <Link
          href={"/list?cat=test"}
          className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
        >
          <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
}
