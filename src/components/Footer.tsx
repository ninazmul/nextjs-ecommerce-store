import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-orange/10 mt-24 text-sm">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide uppercase font-bold">
              Express<span className="text-orange">Bazar</span>BD
            </div>
          </Link>
          <p>A-1/9, Dainkini, Chandra, Kaliakair, Gazipur, Dhaka, Bangladesh</p>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">nazmulsaw@gmail.com</p>
            <p className="font-semibold">+880 1580845746</p>
          </div>
          <div className="flex items-center gap-6">
            <Image src="/facebook.png" alt="facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* Center */}
        <div className="w-full lg:w-2/4 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="uppercase font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="uppercase font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="uppercase font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium uppercase text-lg">Subscribe</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 w-3/4 ring-1 ring-orange rounded-md rounded-r-none"
            />
            <button className="w-1/4 text-white font-semibold bg-orange rounded-r-md ring-1 ring-orange hover:bg-white hover:text-orange transition-all ease-in-out duration-300">
              Join
            </button>
          </div>
          <p className="font-semibold">Secure Payments</p>
          <div className="flex flex-wrap justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="flex flex-col">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} ExpressBazarBD. All rights
            reserved.
          </p>
          <div>
            <span className='text-gray-500'>Developed by -</span>{" "}
            <Link href="https://artistycode-studio.web.app">
              ArtistyCode Studio
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row justify-center items-center">
          <div className="flex items-center md:flex-col">
            <p className="text-gray-500 mr-4">Language</p>
            <p className="font-medium">United States | English</p>
          </div>
          <div className="flex items-center md:flex-col">
            <p className="text-gray-500 mr-4">Currency</p>
            <p className="font-medium">$ USD</p>
          </div>
        </div>
      </div>
    </div>
  );
}
