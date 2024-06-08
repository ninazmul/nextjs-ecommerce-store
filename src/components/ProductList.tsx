import Image from "next/image";
import Link from "next/link";

export default function ProductList() {
  return (
    <div className="flex flex-wrap justify-between gap-x-8 gap-y-16 mt-12">
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] p-4 rounded-md shadow-gray-400 shadow-md bg-orange/10"
      >
        <div className="relative w-full h-72">
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <p className="font-medium">Product name</p>
          <p className="font-semibold">$49</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">My description</p>
        </div>
        <button className="rounded-2xl ring-1 ring-orange text-orange py-2 px-4 hover:bg-orange hover:text-white font-semibold transition-all duration-300 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] p-4 rounded-md shadow-gray-400 shadow-md bg-orange/10"
      >
        <div className="relative w-full h-72">
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <p className="font-medium">Product name</p>
          <p className="font-semibold">$49</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">My description</p>
        </div>
        <button className="rounded-2xl ring-1 ring-orange text-orange py-2 px-4 hover:bg-orange hover:text-white font-semibold transition-all duration-300 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] p-4 rounded-md shadow-gray-400 shadow-md bg-orange/10"
      >
        <div className="relative w-full h-72">
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <p className="font-medium">Product name</p>
          <p className="font-semibold">$49</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">My description</p>
        </div>
        <button className="rounded-2xl ring-1 ring-orange text-orange py-2 px-4 hover:bg-orange hover:text-white font-semibold transition-all duration-300 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/test"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] p-4 rounded-md shadow-gray-400 shadow-md bg-orange/10"
      >
        <div className="relative w-full h-72">
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <p className="font-medium">Product name</p>
          <p className="font-semibold">$49</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">My description</p>
        </div>
        <button className="rounded-2xl ring-1 ring-orange text-orange py-2 px-4 hover:bg-orange hover:text-white font-semibold transition-all duration-300 ease-in-out">
          Add to Cart
        </button>
      </Link>
      
    </div>
  );
}
