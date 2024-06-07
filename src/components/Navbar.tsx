import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image';
import Searchbar from './Searchbar';
import NavIcons from './NavIcons';

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="md:hidden h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide uppercase font-bold">
            Express<span className="text-orange-500">Bazar</span>BD
          </div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3">
          <Link href="/" className='flex items-center gap-3'>
            <Image src="/logo.png" alt='logo' width={24} height={24}/>
            <div className="text-2xl tracking-wide uppercase font-bold">
              Express<span className="text-orange-500">Bazar</span>BD
            </div>
          </Link>
        </div>
        {/* Right */}
              <div className="w-2/3 flex items-center justify-between gap-8">
                  <Searchbar />
                  <NavIcons/>
        </div>
      </div>
    </div>
  );
}
